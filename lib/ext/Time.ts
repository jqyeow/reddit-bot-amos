export class Time {
	static epoch(): number {
		return new Date().getTime()/1000
	}

	static date(epoch: number): Date {
		return new Date(epoch*1000)
	}

	static elapsed(start: Date | number, end?: Date | number): number {
		let _start
		if (start instanceof Date) {_start = Time.epoch()}
		else { _start = start }

		let _end
		if (end instanceof Date) {_end = end.getTime()/1000}
		else if (typeof end === 'number') { _end = end }
		else { _end = Time.epoch()}

		return this._elapsed(_start, _end)
	}

	static _elapsed(start: number, end: number): number {
		return Math.abs(end - start)
	}
}