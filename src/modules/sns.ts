import { AWS, flag } from '../constants'
import { modulate } from '../config'
import { isString } from '@thi.ng/checks'


//   d88~\ 888-~88e  d88~\
//  C888   888  888 C888
//   Y88b  888  888  Y88b
//    888D 888  888   888D
//  \_88P  888  888 \_88P

interface ITopic {
   /** name of topic */
   name: string
   tags?: object
}
export const snsTopic = ({ name, tags = {} }: ITopic): AWS => ({
   resource: {
      sns_topic: {
         name,
         tags: {
            ...flag,
            ...tags,
         },
         arn: '-->',
      },
   },
})

const SnsTopic = ({ name, tags }: ITopic) => {
   const snakeCased = name.replaceAll(/-|\./g, '_')
   if (snakeCased !== name) console.error(`Please use snake_casing for topic name: ${name}`)
   return {
      [name]: snsTopic({ name, tags }),
   }
}

/**
 * NOTE:
 * The name of the topic will be used as the key. e.g.,
 * ```js
 * const { example } = topicModule({ name: 'example' })
 * ```
 */
export const topicModule = modulate({ topic: SnsTopic })

interface ISubscription {
   topic_arn: string
   lambda_arn: string
   filter?: object | string
   scope?: string
}

export const subscription = ({
   topic_arn,
   lambda_arn,
   filter = {},
   scope = 'MessageAttributes',
}: ISubscription): AWS => ({
   resource: {
      // @ts-ignore: subscription_role_arn only needed if protocol == 'firehose'
      sns_topic_subscription: {
         topic_arn,
         protocol: 'lambda',
         endpoint: lambda_arn,
         filter_policy: isString(filter) ? filter : JSON.stringify(filter),
         filter_policy_scope: scope,
         arn: '-->',
      },
   },
})
