import { AWS, flag } from '../types'
import { modulate, namespace, IProvider, ITerraform } from '../index'

interface ITopic {
    /** name of topic */
    name: string
    tags?: object
}
export const topic = ({ name, tags = {} }: ITopic): AWS => ({
    resource: {
        sns_topic: {
            name: `${name}-topic`,
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
        },
    },
})

const snsTopic = (opts: ITopic) => ({
    sns: topic(opts),
})

export const topicModule = modulate({ topic: snsTopic })

interface ISubscription {
    topic_arn: string
    lambda_arn: string
    filter?: object
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
            filter_policy: JSON.stringify(filter),
            filter_policy_scope: scope,
            arn: '-->',
        },
    },
})

