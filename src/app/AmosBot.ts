import {DB_Posts, Reddit} from './Spring'
import Config from './Configuration'
import Logic from '../util/Logic'
import {Post} from '../../lib/reddit_api/types/Post.type'
import {Date} from "../util/Date";

export class AmosBot {
	historic_posts: Post[] = null as any
	last_scan = Date.utc()

	async init(): Promise<void> {
		this.historic_posts = await DB_Posts.scan()
	}

	async run(): Promise<void> {
		Reddit.comments(Config.SUBREDDIT).then(comments=>{
			comments
				.forEach(it => {
					if (Logic.is_amos_yee_comment(it)
					&& Logic.is_new_amos_thread(it, this.historic_posts)) {
						this.onAmosYeePost(it)
					}
				})
		})

		Reddit.threads(Config.SUBREDDIT).then(threads=>{
			threads.forEach(it => {
				if (Logic.is_amos_yee_thread(it)
					&& Logic.is_new_amos_thread(it, this.historic_posts)) {
					this.onAmosYeePost(it)
				}
			})
		})
	}


	async onAmosYeePost(post: Post): Promise<void> {
		let text = 'RESET THE AMOS YEE COUNTER!'
		await Reddit.reply(post.id, text)

		this.historic_posts.push(post)
		await DB_Posts.insert(post.id, post)
	}
}