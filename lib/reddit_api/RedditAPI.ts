import {Comment, Comments} from './types/Comments.type'
import {Post, Posts} from './types/Posts.type'
import Http from '@aelesia/http'

export default class RedditAPI {

	async comments(subreddit: string): Promise<Comment[]> {
		let data = (await Http
			.url(`https://www.reddit.com/r/${subreddit}/comments.json`)
			.get<Comments>())
			.data

		return data.data.children
	}

	async posts(subreddit: string): Promise<Post[]> {
		let data = (await Http
			.url(`https://www.reddit.com/r/${subreddit}/new.json`)
			.get<Posts>())
			.data

		return data.data.children
	}

	async reply(thing_id: string, text: string): Promise<void> {
		// await Http
		// 	.url('https://oauth.reddit.com/api/comment')
		// 	.body_forms({thing_id: comment.id, text: text})
		// 	.post()
		// let id = comment.t1
		// let a: string | undefined
		// return new Promise((resolve)=>{
		// 	console.log(`Replied to ${comment}: ${text}`)
		// 	resolve()
		// })
	}
}