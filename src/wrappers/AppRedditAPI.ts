import RedditAPI from '../../lib/reddit_api/RedditAPI'
import {Post} from '../../lib/reddit_api/types/Post.type'
import {Logger} from "../../lib/Logger";

export class AppRedditAPI extends RedditAPI {
	async threads(subreddit: string): Promise<Post[]> {
		let a = await super.threads(subreddit)
		Logger.metrics({
			context: 'RedditAPI.threads',
			elapsed: 0
		})
		return a
	}

	async comments(subreddit: string): Promise<Post[]> {
		let a = await super.comments(subreddit)
		Logger.metrics({
			context: 'RedditAPI.comments',
			elapsed: 0
		})
		return a
	}

	async reply(thing_id: string, text: string): Promise<void> {
		let a = await super.reply(thing_id, text)
		Logger.info({
			context: 'RedditAPI.reply',
			message: {thing_id},
			elapsed: 0
		})
		return a
	}
}