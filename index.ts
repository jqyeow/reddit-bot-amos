import {AmosBot} from './src/app/AmosBot'
import {RedditAPIErr} from './lib/reddit_api/RedditAPIErr'
import {Log} from "./src/app/Spring";
require('./lib/ext/Array');

(async()=>{
	let bot = new AmosBot()
	await bot.init()
	setInterval(()=>{
		bot.run().catch(e => {
			if (e instanceof RedditAPIErr.General) Log.error('bot', e)
			else if (e instanceof Error) Log.error('bot', e)
		})
	}, 10000)
})()

