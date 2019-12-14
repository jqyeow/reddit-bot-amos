import {Kind, Post} from '../../lib/reddit_api/types/Post.type'
import {bool} from 'aws-sdk/clients/signer'
import {RedditAPIErr} from "../../lib/reddit_api/RedditAPIErr";
import {Logger} from "../../lib/Logger";
export default class Logic {

	static is_amos_yee_comment(comment: Post): boolean {
		if (comment.body.toLowerCase().includes('amos yee')) {
			Logger.info({context: 'is_amos_yee_comment', message: comment.id, count: 1})
			return true
		}
		return false
	}

	static is_amos_yee_thread(thread: Post): boolean {
		if (thread.body.toLowerCase().includes('amos yee')
			|| thread.title.toLowerCase().includes('amos')) {
			Logger.info({context: 'is_amos_yee_thread', message: thread.id, count: 1})
			return true
		}
		return false
	}

	static is_amos_yee_post(post: Post): boolean {
		switch (post.kind) {
			case Kind.Thread:
				return this.is_amos_yee_thread(post)
			case Kind.Comment:
				return this.is_amos_yee_comment(post)
			default:
				Logger.warn({context: 'is_amos_yee_post', error: {name: 'UnrecognizedKind', message: post.id}})
				return false
		}
	}

	static is_new_amos_thread(post: Post, past_threads: Post[]): boolean {
		if (!past_threads.some(it=>{
			return post.thread_id === it.thread_id
		})) {
			Logger.info({context: 'is_new_amos_thread', message: {id: post.id, title: post.title}, count: 1})
			return true
		}
		Logger.info({context: 'is_old_amos_thread', message: {id: post.id, title: post.title}, count: 1})
		return false
	}
}
