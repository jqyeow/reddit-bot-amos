import {Post} from '../../lib/reddit_api/types/Post.type'
import {Time} from '../../lib/ext/Time'

export class Reply {

	static reset_counter(post: Post, last_post: Post): string {
		let str = ''
		str += '**RESET THE COUNTER!!!**\n\n'
		str += 'It has been '
		str += `_${Reply.adjective()}_ `
		str += `**${Reply.pretty_time(Time.elapsed(last_post.date, post.date))}** `
		str += 'since we\'ve had an intellectual discussion about Amos Yee\n\n'
		str += '----------\n\n'
		str += `Last mentioned by [${last_post.author}](): [${last_post.title}](${last_post.url})`
		return str
	}

	private static adjective(): string {
		return [
			'an astonishing',
			'a mind-boggling',
			'a mind-blowing',
			'an unbelievable',
			'an inconceivable span of',
			'a grand total of',
			'a wondrous',
			'a shocking span of',
			'an exceptional span of',
			'an impressive',
			'a remarkable',
			'a peaceful span of',
			'a noteworthy',
			'a spectacular',
			'a momentous',
			'an exceptional'
		].random()
	}

	private static pretty_time(unix_time: number): string {
		if (unix_time < 120) {
			return `${Math.floor(unix_time)} second(s)`
		} else if (unix_time < 7200) {
			return `${Math.floor(unix_time/60)} minute(s)`
		} else if (unix_time < 172800) {
			return `${Math.floor(unix_time/3600)} hour(s)`
		} else {
			return `${Math.floor(unix_time/86400)} day(s)`
		}
	}
}
