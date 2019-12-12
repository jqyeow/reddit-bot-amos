export class Date {
	static utc(): number {
		return ((new Date()).valueOf() as number)/1000
	}
}