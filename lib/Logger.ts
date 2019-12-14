interface MyLog {
	time?: Date
	context?: string
	message?: string | object
	error?: Error
	count?: number
	metrics?: string
	elapsed?: number
}

export class Logger {
	static info(log: MyLog) {
		console.info(JSON.stringify(log))
	}
	static warn(log: MyLog) {
		console.warn(JSON.stringify(log))
	}
	static error(log: MyLog) {
		console.error(JSON.stringify(log))
		console.error(log.error)
	}
	static fatal(log: MyLog) {
		console.error(JSON.stringify(log))
	}
	static metrics(log: MyLog) {
		console.info(JSON.stringify(log))
	}
}