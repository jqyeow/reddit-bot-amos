import RedditAPI from '../../lib/reddit_api/RedditAPI'
import {sleep} from "../../lib/ext/Control";
import { OAuth2Token } from '@aelesia/http';
import Config from "../../src/app/Configuration";

describe('RedditAPI', () => {

	let reddit = new RedditAPI({
		client_id: Config.O2A_CLIENT_ID,
		client_secret: Config.O2A_SECRET,
		password: Config.O2A_PASSWORD,
		username: Config.REDDIT_SELF
	})

	test('Comments', async () => {
		let results = await reddit.comments('testingground4bots')
		// console.log(results)
		expect(results.length).toEqual(25)
	})

	test('Threads', async () => {
		let results = await reddit.threads('testingground4bots')
		// console.log(results)
		expect(results.length).toEqual(25)
	})

	test('Token', async () => {
		// let results = await reddit.token()
		// // console.log(results)
		// expect(results.access_token).not.toBeNull()
		// expect(results.token_type).toEqual('bearer')
		// expect(results.expires_in).toEqual(3600)
		// expect(results.scope).toEqual('*')
	})

	test('Me', async() => {
		let results = await reddit.me()
		expect(results).not.toBeNull()
		expect(results.name).toEqual(Config.REDDIT_SELF)
	})

	test('Reply', async() => {
		await reddit.reply(
			't3_eaiqlw',
			'[Jest Test] RedditAPI.test.ts')
	})
})
