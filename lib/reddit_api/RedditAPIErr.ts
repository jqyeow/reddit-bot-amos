export namespace RedditAPIErr {
	export class General extends Error {
		constructor(msg: string) {
			super(msg)
			this.name = 'GeneralError'
			Object.setPrototypeOf(this, General.prototype)
		}
	}

	export class PostLimit extends General {
		constructor(msg: string) {
			super(msg)
			this.name = 'PostLimitError'
			Object.setPrototypeOf(this, PostLimit.prototype)
		}
	}
}