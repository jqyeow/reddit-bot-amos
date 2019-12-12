import {Post} from '../../lib/reddit_api/types/Post.type'

export class Util {
	static latest_post_time(post: Post[]) {
		return post.map(it => {
			return it.date
		}).max()
	}
}