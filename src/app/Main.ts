import {Reddit} from './Spring'
import Config from './Configuration'
import Logic from '../util/Logic'
import {Post} from '../../lib/reddit_api/RedditAPI'

async function run(): Promise<void> {
	let comments = await Reddit.comments(Config.SUBREDDIT)
	// comments.forEach((it) => {
	// 	if (Logic.is_amos_yee_post(it)) {
	// 		onAmosYeePost(it)
	// 	}
	// })
	comments
		.filter(Logic.is_amos_yee_post)
		.forEach(it => {
			onAmosYeePost(it)
		})
}

async function onAmosYeePost(comment: Post): Promise<void> {
	let text = 'RESET THE AMOS YEE COUNTER!'
	await Reddit.reply(comment, text)
}
