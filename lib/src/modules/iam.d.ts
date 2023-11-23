import { AWS } from '../constants';
interface IamStatementInput {
    /** ref is usually the arn of the resource, but can be bucket or other identifier */
    ref: string;
    /** role_arn is the arn of the Iam role attached to the lambda */
    role_arn: string;
    /** actions are the actions allowed by the policy */
    actions: string[];
    /** type is the type of resource (e.g., "s3", "sns", "cloudwatch") */
    type: string;
}
export declare const defaultActions: {
    s3: string[];
    sns: string[];
    cloudwatch: string[];
};
export declare const multiStatementIamPolicyDoc: (configs: IamStatementInput[]) => AWS;
export declare const iamRoleModule: (args_0: {
    name: any;
    configs: any;
    tags: any;
}, ...args_1: [({
    name: any;
    configs: any;
    tags: any;
} | undefined)?, ({
    [key: string]: AWS;
} | undefined)?][]) => [{
    [x: string]: AWS;
}, {
    [x: string]: AWS;
}];
export {};
//# sourceMappingURL=iam.d.ts.map