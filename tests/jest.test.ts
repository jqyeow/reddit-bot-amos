import {DB_Posts, Reddit} from "../src/app/Spring";
import {AmosBot} from "../src/app/AmosBot";

describe('Describe', () => {

	test('Test Pass', async () => {
		expect('1').toBe('1')
	})

	test('Test Fail', async () => {
		expect('1').toBe('2')
	})

	test('DB', async () => {
		// let posts = (await Reddit.comments('singapore'))
		// await DB_Posts.insert(posts[0].date.toString(), posts[0])
		// await DB_Posts.insert(posts[1].date.toString(), posts[1])
		// await DB_Posts.insert(posts[2].date.toString(), posts[2])
		// console.log(await DB_Posts.scan())
		let bot = new AmosBot()
		await bot.init()
		await bot.run()
		console.log('help')
	})
})
