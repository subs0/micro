import { flag } from '../types';
import { modulate } from '../index';
import { isString } from '@thi.ng/checks';
export const topic = ({ name, tags = {} }) => ({
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
});
const snsTopic = (opts) => ({
    sns: topic(opts),
});
export const topicModule = modulate({ topic: snsTopic });
export const subscription = ({ topic_arn, lambda_arn, filter = {}, scope = 'MessageAttributes', }) => ({
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
});
//# sourceMappingURL=sns.js.map