import { AWS } from '../types';
export declare const iam_policy_doc: AWS;
export declare const iam_role: ({ name, policy_json, tags }: {
    name: any;
    policy_json: any;
    tags?: {} | undefined;
}) => AWS;
export declare const multi_stmt_policy_doc: ({ bucket_name, topic_arn, cloudwatch_arn, lambda_role_arn, }: {
    bucket_name?: string | undefined;
    topic_arn?: string | undefined;
    cloudwatch_arn?: string | undefined;
    lambda_role_arn?: string | undefined;
}) => AWS;
export declare const iam_role_policy_attachment: ({ role_name, policy_arn }: {
    role_name: any;
    policy_arn: any;
}) => AWS;
export declare const iam_policy: ({ name, policy_json, tags }: {
    name: any;
    policy_json: any;
    tags?: {} | undefined;
}) => AWS;
//# sourceMappingURL=iam.d.ts.map