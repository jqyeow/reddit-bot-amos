import {Reddit} from './Spring'
import Config from './Configuration'
import Logic from '../util/Logic'
import {Post} from '../../lib/reddit_api/RedditAPI'

async function run(): Promise<void> {
	let comments = await Reddit.comments(Config.SUBREDDIT)
	for (const it of comments) {
		if (Logic.is_amos_yee_post(it)
			&& Logic.is_new_amos_thread(it, ([{id: '123'}]))
			// && Logic.is_past_cooldown(it, ({} as Post), 1)
		) await onAmosYeePost(it)
	}
}

async function onAmosYeePost(comment: Post): Promise<void> {
	let text = 'RESET THE AMOS YEE COUNTER!'
	await Reddit.reply(comment, text)
}
