import {Log, Logger, LogLevel, LogStream} from '../Logger'

export class ConsoleStream implements LogStream {

	send(log: Log) {
		switch(log.level) {
			case LogLevel.TRACE: console.debug(ConsoleStream._s(log))
				break
			case LogLevel.DEBUG: console.debug(ConsoleStream._s(log))
				break
			case LogLevel.INFO: console.info(ConsoleStream._s(log))
				break
			case LogLevel.WARN: console.warn(ConsoleStream._s(log))
				break
			case LogLevel.ERROR: console.error(ConsoleStream._s(log))
				break
			case LogLevel.FATAL: console.error(ConsoleStream._s(log))
				break
		}
	}

	static stringify(obj: Object | string | undefined): string | undefined {
		if (typeof obj === 'object') {
			return JSON.stringify(obj)
		}
		return obj
	}

	static _s(log: Log): string {
		return `[${log.timestamp}]` +
			` [${LogLevel[log.level]}]` +
			` [${log.context}]` +
			` [${log.elapsed != undefined ? log.elapsed + 'ms' : ''}]` +
			` ${this.stringify(log.msg)}`
	}
}
