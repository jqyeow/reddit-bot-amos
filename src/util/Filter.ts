import {Kind, Post} from "../../lib/reddit_api/types/Post.type";

export class Filter {
	new_post_since(post: Post, utc: number) {
		return post.date >= utc
	}

	is_amos_yee_comment(post: Post): boolean {
		if (post.kind !== Kind.Comment) throw Error('Not a Comment: ' + post)

		return post.body.toLowerCase().includes('amos yee')
	}

	is_amos_yee_thread(post: Post): boolean {
		if (post.kind !== Kind.Thread) throw Error('Not a Thread: ' + post)

		return (post.body.toLowerCase().includes('amos yee')
			|| post.title.toLowerCase().includes('amos'))
	}

	is_new_amos_thread(post: Post, past_threads: Post[]): boolean {
		return !past_threads.some(it=>{
			return post.thread_id === it.thread_id
		})
	}
}