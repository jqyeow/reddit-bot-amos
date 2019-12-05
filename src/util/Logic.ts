import {Post} from '../../lib/reddit_api/RedditAPI'
import {Kind, T1_Data} from '../../lib/reddit_api/types/Comments.type'
import {bool} from "aws-sdk/clients/signer";

export default class Logic {

	static is_amos_yee_post(post: Post): boolean {

		switch(post.kind) {
			case Kind.Comment:
				return post.t1?.body.toLowerCase().includes('amos yee') ?? false

			case Kind.Thread:
				return (post.t3?.selftext.toLowerCase().includes('amos yee')
					|| post.t3?.title.toLowerCase().includes('amos')) ?? false

			default:
				// TODO: Change ErrorType
				throw new Error('RuntimeError. This should never have occurred.')
		}
	}

	/**
	 * Returns true if thread has not been encountered before
	 */
	static is_new_amos_thread(comment: Post, past_threads: {id: string}[]): boolean {
		return past_threads.some(it => {
			switch(comment.kind) {
				case Kind.Comment: return comment.t1?.link_id.includes(it.id)
				case Kind.Thread: return comment.t3?.id === it.id

				default:
					// TODO: Change ErrorType
					throw new Error('RuntimeError. This should never have occurred.')
			}
		})
	}

	/**
	 *
	 */
	static is_past_cooldown(comment: Post, last_comment: Post, cooldown: number): boolean {
		return comment.data.created_utc - last_comment.data.created_utc >= cooldown
	}
}