import {Post} from '../../lib/reddit_api/types/Post.type'
import {bool} from "aws-sdk/clients/signer";
import Config from "../app/Configuration";
import {Logger} from "../../lib/Logger";

class Filter {

	private latest_comment_time: number = 0
	private latest_thread_time: number = 0

	unread_threads(posts: Post[]): Post[] {
		let unread = posts.filter(it => { return it.date > this.latest_thread_time })

		let latest_time = unread.map(it => {
			return it.date
		}).max()

		this.latest_thread_time = this.latest_thread_time > latest_time ? this.latest_thread_time : latest_time
		return unread
	}

	unread_comments(posts: Post[]): Post[] {
		let unread = posts.filter(it => { return it.date > this.latest_comment_time })

		let latest_time = unread.map(it => {
			return it.date
		}).max()

		this.latest_comment_time = this.latest_comment_time > latest_time ? this.latest_comment_time : latest_time
		return unread
	}

	self_posts(post: Post): boolean {
		if (post.author === Config.REDDIT_SELF) {
			Logger.info({context: 'self_post', message: {id: post.id}})
			return false
		}
		return true
	}
}
export default new Filter()