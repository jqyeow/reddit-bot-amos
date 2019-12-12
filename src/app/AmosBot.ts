import {DB_Posts, Reddit} from './Spring'
import Config from './Configuration'
import Logic from '../util/Logic'
import {Post} from '../../lib/reddit_api/types/Post.type'
import {Util} from '../util/Util'
import Filter from '../util/Filter'
import {Reply} from './Reply'


export class AmosBot {
	historic_posts: Post[] = null as any

	async init(): Promise<void> {
		this.historic_posts = await DB_Posts.scan()
		// console.log('Retrieving History: \n' + JSON.stringify(this.historic_posts))
		console.log(this.historic_posts)
	}

	async run(): Promise<void> {
		let posts = await this.retrieve_posts()
		posts.forEach(it => {
			if (Logic.is_amos_yee_thread(it)
				&& Logic.is_new_amos_thread(it, this.historic_posts)) {
				this.onAmosYeePost(it)
			}
		})
	}

	async retrieve_posts(): Promise<Post[]> {
		let result = await Promise.all([
			Reddit.comments(Config.SUBREDDIT),
			Reddit.threads(Config.SUBREDDIT)
		])

		let comments = Filter.unread_comments(result[0])
			.filter(Filter.self_posts)
		let threads = Filter.unread_threads(result[1])

		if (!comments.is_empty()) console.log(`Retrieved ${comments.length} comments from /r/${Config.SUBREDDIT}`)
		if (!threads.is_empty()) console.log(`Retrieved ${comments.length} comments from /r/${Config.SUBREDDIT}`)

		return ([] as Post[]).concat(comments, threads)
	}


	async onAmosYeePost(post: Post): Promise<void> {
		let text = Reply.reset_counter(post, this.historic_posts.last())
		await Reddit.reply(post.id, text)

		this.historic_posts.push(post)
		await DB_Posts.insert(post.id, post)
	}
}