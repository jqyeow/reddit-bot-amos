import {Comments, Convert, Kind, T1_Data, T3_Data} from './types/Comments.type'
import Http from '@aelesia/http'

// export type Comment = ChildData & { kind: Kind }
export interface Post {
	t1?: T1_Data,
	t3?: T3_Data,
	data: T1_Data | T3_Data
	kind: Kind
}

export default class RedditAPI {

	async comments(subreddit: string): Promise<Post[]> {
		let data = (await Http
			.url(`https://www.reddit.com/r/${subreddit}/comments.json`)
			.get<Comments>())
			.data

		let comments: Comments = Convert.toComments(JSON.stringify(data))
		return comments.data.children.map<Post>((it)=>{
			switch(it.kind) {
				case Kind.Comment:
					return {t1: (it.data as T1_Data), kind: it.kind, data: it.data}
				case Kind.Thread:
					return {t3: (it.data as T3_Data), kind: it.kind, data: it.data}
			}
			// TODO: Better error
			throw Error('Unknown kind')
		})
	}

	async reply(comment: Post, text: string): Promise<void> {
		// await Http
		// 	.url('https://oauth.reddit.com/api/comment')
		// 	.body_forms({thing_id: comment.id, text: text})
		// 	.post()
		let id = comment.t1
		let a: string | undefined
		return new Promise((resolve)=>{
			console.log(`Replied to ${comment}: ${text}`)
			resolve()
		})
	}
}