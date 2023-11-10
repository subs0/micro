import { AWS } from '../types';
export declare const iam_role: ({ name, policy_json, tags }: {
    name: any;
    policy_json: any;
    tags?: {} | undefined;
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