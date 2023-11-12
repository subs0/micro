import { AWS } from '../constants';
export declare const iamRole: ({ name, policy_json, tags }: {
    name: any;
    policy_json: any;
    tags?: {} | undefined;
}) => AWS;
export declare const iamRolePolicyAttachment: ({ role_name, policy_arn }: {
    role_name: any;
    policy_arn: any;
}) => AWS;
export declare const iamPolicy: ({ name, policy_json, tags }: {
    name: any;
    policy_json: any;
    tags?: {} | undefined;
}) => AWS;
//# sourceMappingURL=iam.d.ts.map