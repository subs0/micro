import { AWS, flag } from '../types'

export const topic = ({ name, tags = {} }): AWS => ({
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

export const subscription = ({
    topic_arn,
    lambda_arn,
    filter = {},
    scope = 'MessageAttributes',
}): AWS => ({
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
