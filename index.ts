import {AmosBot} from './src/app/AmosBot'
require('./lib/ext/Array');

(async()=>{
	let bot = new AmosBot()
	await bot.init()
	setInterval(()=>{
		bot.run().catch(e => {
			console.error(e)
		})
	}, 10000)
})()

