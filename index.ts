import {AmosBot} from './src/app/AmosBot';


(async()=>{
	let bot = new AmosBot()
	await bot.init()
	setInterval(bot.run, 15000)
})()
