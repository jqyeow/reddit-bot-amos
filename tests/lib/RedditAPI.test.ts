import RedditAPI from '../../lib/reddit_api/RedditAPI'
import {sleep} from "../../lib/ext/Control";

describe('RedditAPI', () => {

	let reddit = new RedditAPI()

	test('Comments', async () => {
		let results = await reddit.comments('testingground4bots')
		expect(results.length).toEqual(25)
	})

	test('Threads', async () => {
		let results = await reddit.threads('testingground4bots')
		expect(results.length).toEqual(25)
	})

	test('Token', async () => {
		let results = await reddit.token()
		// console.log(results)
		expect(results.access_token).not.toBeNull()
		expect(results.token_type).toEqual('bearer')
		expect(results.expires_in).toEqual(3600)
		expect(results.scope).toEqual('*')
	})

	test('Me', async() => {
		// await reddit.init()
		try {
			console.log('try')
			let results = await reddit.me()
			console.log(results)
		} catch {
			console.log('catch')
			let results = await reddit.me()
			console.log('error', results)
		}
	})
})
