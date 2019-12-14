import {AwsDynamodb} from "../../lib/aws-dynamodb/AwsDynamodb";
import * as AWS from "aws-sdk";
import {Logger} from "../../lib/Logger";

export class AppDyanmoDB<T extends object> extends AwsDynamodb<T> {

	constructor(region: string, table: string) {
		super(region, table)
	}

	async scan(): Promise<T[]> {
		let a = await super.scan()
		Logger.info({
			context: `DynamoDB.${this.table}.scan`,
			message: `Items: ${a.length}`,
			elapsed: 0
		})
		return a
	}

	async insert(key: string, value: T): Promise<void> {
		let a = await super.insert(key, value)
		Logger.info({
			context: `DynamoDB.${this.table}.insert`,
			message: value,
			elapsed: 0
		})
		return a
	}
}
