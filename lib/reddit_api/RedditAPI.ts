import {Comment, Comments} from './types/Comments.type'
import {Thread, Threads} from './types/Threads.type'
import Http, {OAuth2Token} from '@aelesia/http'
import {Kind, Post} from './types/Post.type'
import {Token, TokenForm} from './types/RedditAPI.type'
import {Me} from './types/Me.type'
import {strict} from 'assert'

type Credentials = {
	client_id: string,
	client_secret: string,
	password: string,
	username: string
}

export default class RedditAPI{

	oauth2: Http = null as any

	constructor(credentials?: Credentials) {
		if (credentials) {
			this.oauth2 = Http.url('').auth_oauth2_password(
				new OAuth2Token({
					access_token_url: 'https://www.reddit.com/api/v1/access_token',
					client_id: credentials.client_id,
					client_secret: credentials.client_secret,
					password: credentials.password,
					username: credentials.username
				}))
		}
	}

	async comments(subreddit: string): Promise<Post[]> {
		let data = (await Http
			.url(`https://www.reddit.com/r/${subreddit}/comments.json`)
			.get<Comments>())
			.data

		return data.data.children.map<Post>(it=>{
			return {
				id: `$t1_${it.data.id}`,
				author: it.data.author,
				body: it.data.body,
				date: it.data.created_utc,
				kind: Kind.Comment,
				thread_id: it.data.link_id,
				title: it.data.link_title,
				url: `https://reddit.com${it.data.permalink}`
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
		// console.log(`Replying ${thing_id} with ${text}`)
		// await Http
		// 	.url('https://oauth.reddit.com/api/comment')
		// 	.auth_oauth2_password(this.oauth2_token)
		// 	.body_forms({thing_id: thing_id, text: text})
		// 	.
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

	async token(): Promise<Token> {
		return (await Http.url('https://www.reddit.com/api/v1/access_token')
			.header('User-Agent', '')
			.auth_basic('OXd8vQmT6UT-hQ', '5YKPwq082vsk_Eu5IVKvg_6v5TA')
			.body_forms<TokenForm>({
				grant_type: 'password',
				username: 'throwmefuckingaway',
				password: 'cloud860'
			})
			.post<Token>())
			.data
	}

	async me() :Promise<Me> {
		return (await this.oauth2
			.url('https://oauth.reddit.com/api/v1/me')
			.get<Me>())
			.data
	}
}