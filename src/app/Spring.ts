import RedditAPI from '../../lib/reddit_api/RedditAPI'
import {DBHash} from '../../lib/aws-dynamodb/DBHash'
import {Post} from '../../lib/reddit_api/types/Post.type'
import Config from './Configuration'
import * as AWS from 'aws-sdk'
import {AwsDynamodb} from '../../lib/aws-dynamodb/AwsDynamodb'

AWS.config.secretAccessKey = Config.AWS_SECRET_ACCESS_KEY
AWS.config.accessKeyId = Config.AWS_ACCESS_KEY

export const Reddit = new RedditAPI()

// export const DB_Posts = new DBHash<Post>(Config.DB_POSTS)
export const DB_Posts = new AwsDynamodb<Post>(Config.AWS_REGION, Config.DB_POSTS)
