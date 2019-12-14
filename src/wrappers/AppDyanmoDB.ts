import {AwsDynamodb} from '../../lib/aws-dynamodb/AwsDynamodb'
import {Log} from '../app/Spring'

export class AppDyanmoDB<T extends object> extends AwsDynamodb<T> {

	constructor(region: string, table: string) {
		super(region, table)
	}

	async scan(): Promise<T[]> {
		let log = Log.start_timer()
		let a = await super.scan()
		log.info(`DDB.${this.table}.scan`, {items: a.length}).track_time().count()
		return a
	}

	async insert(key: string, value: T): Promise<void> {
		let log = Log.start_timer()
		let a = await super.insert(key, value)
		log.info(`DDB.${this.table}.insert`, value).track_time().count()
		return a
	}
}
