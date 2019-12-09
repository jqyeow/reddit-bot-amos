import {Comment} from '../../lib/reddit_api/types/Comments.type'
import {Post} from '../../lib/reddit_api/types/Posts.type'
import {Common} from '../../lib/reddit_api/types/Misc.type'
export default class Logic {

	static is_amos_yee_comment(comment: Comment): boolean {
		return comment.data.body.toLowerCase().includes('amos yee') ?? false
	}

	static is_amos_yee_thread(post: Post): boolean {
		return (post.data.selftext.toLowerCase().includes('amos yee')
			|| post.data.title.toLowerCase().includes('amos'))
	}

	/**
	 * Returns true if thread has not been encountered before
	 */
	static is_new_amos_thread(thing: Post | Comment, past_threads: HistoricPost[]): boolean {
		let thread_id: string
		if (thing.kind === 't1') thread_id = (thing as Comment).data.link_id
		else thread_id = (thing as Post).data.name

		return past_threads.some((it)=>{
			return it.thread_id === thread_id
		})
	}

	/**
	 *
	 */
	// static is_past_cooldown(comment: ChildData, last_comment: ChildData, cooldown: number): boolean {
	// 	return comment.data.created_utc - last_comment.data.created_utc >= cooldown
	// }
}