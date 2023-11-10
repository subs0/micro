import { AWS } from '../types';
interface ITopic {
    /** name of topic */
    name: string;
    tags?: object;
}
export declare const topic: ({ name, tags }: ITopic) => AWS;
export declare const topicModule: (args_0: ITopic, ...args_1: [opts?: ITopic | undefined][]) => [{
    sns: AWS;
}, {
    sns: AWS;
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