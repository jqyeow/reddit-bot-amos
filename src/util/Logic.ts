import {Kind, Post} from '../../lib/reddit_api/types/Post.type'
import {bool} from 'aws-sdk/clients/signer'
export default class Logic {

	static is_amos_yee_comment(comment: Post): boolean {
		if (comment.body.toLowerCase().includes('amos yee')) {
			console.log(`Comment #${comment.id} is an Amos Yee comment`)
			return true
		}
		return false
	}

	static is_amos_yee_thread(thread: Post): boolean {
		if (thread.body.toLowerCase().includes('amos yee')
			|| thread.title.toLowerCase().includes('amos')) {
			console.log(`Thread #${thread.id} is an Amos Yee thread`)
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
				console.warn('Unrecognized kind: ' + post.kind)
				return false
		}
	}

	static is_new_amos_thread(post: Post, past_threads: Post[]): boolean {
		if (!past_threads.some(it=>{
			return post.thread_id === it.thread_id
		})) {
			console.log(`Thread #${post.id} not encountered before: ${post.title}`)
			return true
		}
		console.log(`Thread #${post.id} was encountered before: ${post.title}`)
		return false
	}
}