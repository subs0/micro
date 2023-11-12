import { AWS, flag } from '../constants'
import { modulate, namespace, IProvider, ITerraform } from '../index'
import { isString } from '@thi.ng/checks'

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

const SnsTopic = ({ name, tags }: ITopic) => ({
   [name.replaceAll(/-|\./g, '_')]: snsTopic({ name, tags }),
})

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
