import {Comment, Comments} from './types/Comments.type'
import {Thread, Threads} from './types/Threads.type'
import Http from '@aelesia/http'
import {Kind, Post} from './types/Post.type'

export default class RedditAPI {

	async comments(subreddit: string): Promise<Post[]> {
		let data = (await Http
			.url(`https://www.reddit.com/r/${subreddit}/comments.json`)
			.get<Comments>())
			.data

		return data.data.children.map<Post>(it=>{
			return {
				id: it.data.id,
				author: it.data.author,
				body: it.data.body,
				date: it.data.created_utc,
				kind: Kind.Comment,
				thread_id: it.data.link_id,
				title: it.data.link_title,
				url: it.data.link_url
			}
		})
	}

	async threads(subreddit: string): Promise<Post[]> {
		let data = (await Http
			.url(`https://www.reddit.com/r/${subreddit}/new.json`)
			.get<Threads>())
			.data

		return data.data.children.map<Post>(it=>{
			return {
				id: it.data.id,
				author: it.data.author,
				body: it.data.selftext,
				date: it.data.created_utc,
				kind: Kind.Comment,
				thread_id: it.data.name,
				title: it.data.title,
				url: it.data.url
			}
		})
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