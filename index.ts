import {AmosBot} from './src/app/AmosBot';


(async()=>{
	let bot = new AmosBot()
	await bot.init()
	await bot.run()
	setInterval(()=>bot.run(), 10000)
})()
