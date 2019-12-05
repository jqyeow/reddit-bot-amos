import {RedditAPI} from '../../lib/reddit_api/RedditAPI'


describe('RedditAPI', () => {

	let reddit = new RedditAPI()

	test('Test Pass', async () => {
		console.log(await reddit.comments('singapore'))
	})
})
