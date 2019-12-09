import RedditAPI from '../../lib/reddit_api/RedditAPI'
import {DBHash} from '../../lib/aws-dynamodb/DBHash'
import {Post} from '../../lib/reddit_api/types/Post.type'
import Config from "./Configuration";

export const Reddit = new RedditAPI()

export const DB_Posts = new DBHash<Post>(Config.DB_POSTS)
