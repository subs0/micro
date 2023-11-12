import { AWS } from '../constants';
interface ITopic {
    /** name of topic */
    name: string;
    tags?: object;
}
export declare const snsTopic: ({ name, tags }: ITopic) => AWS;
/**
 * NOTE:
 * The name of the topic will be used as the key. e.g.,
 * ```js
 * const { example } = topicModule({ name: 'example' })
 * ```
 */
export declare const topicModule: (args_0: ITopic, ...args_1: [(ITopic | undefined)?][]) => [{
    [x: string]: AWS;
}, {
    [x: string]: AWS;
}];
interface ISubscription {
    topic_arn: string;
    lambda_arn: string;
    filter?: object | string;
    scope?: string;
}
export declare const subscription: ({ topic_arn, lambda_arn, filter, scope, }: ISubscription) => AWS;
export {};
//# sourceMappingURL=sns.d.ts.map