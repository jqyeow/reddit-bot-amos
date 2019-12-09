import {DB_Posts, Reddit} from './Spring'
import Config from './Configuration'
import Logic from '../util/Logic'
import {Post} from '../../lib/reddit_api/types/Post.type'

class AmosBot {
	historicPosts: Post[] = null as any

	async init(): Promise<void> {
		this.historicPosts = (await DB_Posts.scan()).map(it=>{
			return it.value
		})
	}

	async run(): Promise<void> {
		Reddit.comments(Config.SUBREDDIT).then(comments=>{
			comments.forEach(it => {
				if (Logic.is_amos_yee_comment(it)
					&& Logic.is_new_amos_thread(it, this.historicPosts)) {
					this.onAmosYeePost(it)
				}
			})
		})

		Reddit.threads(Config.SUBREDDIT).then(threads=>{
			threads.forEach(it => {
				if (Logic.is_amos_yee_thread(it)
					&& Logic.is_new_amos_thread(it, this.historicPosts)) {
					this.onAmosYeePost(it)
				}
			})
		})
	}


	async onAmosYeePost(post: Post): Promise<void> {
		let text = 'RESET THE AMOS YEE COUNTER!'
		await Reddit.reply(post.id, text)

		this.historicPosts.push(post)
		await DB_Posts.insert(post.date.toString(), post)
	}
}