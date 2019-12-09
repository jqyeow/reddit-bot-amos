import RedditAPI from '../../lib/reddit_api/RedditAPI'

describe('RedditAPI', () => {

	let reddit = new RedditAPI()

	test('Comments', async () => {
		let results = await reddit.comments('testingground4bots')
		expect(results.length).toEqual(25)
	})

	test('Threads', async () => {
		let results = await reddit.posts('testingground4bots')
		expect(results.length).toEqual(25)
	})
})
