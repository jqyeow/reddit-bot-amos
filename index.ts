import {AmosBot} from './src/app/AmosBot'
require('./lib/ext/Array');

(async()=>{
	let bot = new AmosBot()
	await bot.init()
	await bot.run()
	setInterval(()=>bot.run(), 10000)
})()

