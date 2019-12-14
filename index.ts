import {AmosBot} from './src/app/AmosBot'
import {RedditAPIErr} from "./lib/reddit_api/RedditAPIErr";
import {Logger} from "./lib/Logger";
require('./lib/ext/Array');

(async()=>{
	let bot = new AmosBot()
	await bot.init()
	setInterval(()=>{
		bot.run().catch(e => {
			if (e instanceof RedditAPIErr.General) Logger.error({context: 'bot', error: e})
			else if (e instanceof Error) Logger.error({context: 'bot', error: e})
		})
	}, 10000)
})()

