import {Post} from '../../lib/reddit_api/types/Post.type'
export default class Logic {

	static is_amos_yee_comment(comment: Post): boolean {
		return comment.body.toLowerCase().includes('amos yee')
	}

	static is_amos_yee_thread(thread: Post): boolean {
		return (thread.body.toLowerCase().includes('amos yee')
			|| thread.title.toLowerCase().includes('amos'))
	}

	static is_new_amos_thread(post: Post, past_threads: Post[]): boolean {
		return !past_threads.some((it)=>{
			return post.thread_id === it.thread_id
		})
	}
}