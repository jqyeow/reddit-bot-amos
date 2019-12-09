import {Reddit} from './Spring'
import Config from './Configuration'
import Logic from '../util/Logic'
import {Common} from '../../lib/reddit_api/types/Misc.type'
import {Comment} from "../../lib/reddit_api/types/Comments.type";
import {Post} from "../../lib/reddit_api/types/Posts.type";

async function run(): Promise<void> {

	let historicPosts: HistoricPost[]

	Reddit.comments(Config.SUBREDDIT).then(comments=>{
		comments.forEach(it => {
			if (Logic.is_amos_yee_comment(it)
				&& Logic.is_new_amos_thread(it, historicPosts)) {
				onAmosYeePost(it)
			}
		})
	})

	Reddit.posts(Config.SUBREDDIT).then(posts=>{
		posts.forEach(it => {
			if (Logic.is_amos_yee_thread(it)
				&& Logic.is_new_amos_thread(it, historicPosts)) {
				onAmosYeePost(it)
			}
		})
	})
}

async function onAmosYeePost(post: Common): Promise<void> {
	let text = 'RESET THE AMOS YEE COUNTER!'
	await Reddit.reply(post.data.id, text)

	let asd: HistoricPost = {
		author: post.data.author,
		date: undefined,
		thread_title: post.kind === 't1' ? (post as Comment).data.link_title : (post as Post).data.title,
		thing_url: ""
	}
}
