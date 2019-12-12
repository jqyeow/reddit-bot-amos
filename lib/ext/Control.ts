export async function loop(func:()=>any, func_catch:(e: Error)=>void): Promise<void> {
	try {
		await func()
	} catch (e) {
		await func_catch(e)
	}
	setTimeout(() => loop(func, func_catch))
}

export async function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(()=>{
			resolve()
		}, ms)
	})
}