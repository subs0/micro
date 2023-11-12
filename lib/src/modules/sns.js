import { flag } from '../constants';
import { modulate } from '../index';
import { isString } from '@thi.ng/checks';
export const snsTopic = ({ name, tags = {} }) => ({
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
});
const SnsTopic = ({ name, tags }) => {
    const snakeCased = name.replaceAll(/-|\./g, '_');
    return {
        [snakeCased]: snsTopic({ name, tags }),
    };
};
/**
 * NOTE:
 * The name of the topic will be used as the key. e.g.,
 * ```js
 * const { example } = topicModule({ name: 'example' })
 * ```
 */
export const topicModule = modulate({ topic: SnsTopic });
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