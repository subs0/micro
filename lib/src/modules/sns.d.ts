import { AWS } from '../types';
export declare const topic: ({ name, tags }: {
    name: any;
    tags?: {} | undefined;
}) => AWS;
export declare const subscription: ({ topic_arn, lambda_arn, filter, scope, }: {
    topic_arn: any;
    lambda_arn: any;
    filter?: {} | undefined;
    scope?: string | undefined;
}) => AWS;
//# sourceMappingURL=sns.d.ts.map