export interface IamPolicy {
    data: Datum[];
}

export interface Datum {
    iam_policy: IamPolicyClass;
}

export interface IamPolicyClass {
    /** (Optional) ARN of the IAM policy. */
    arn?:         any;
    /** (Optional) Name of the IAM policy. */
    name?:        any;
    /** (Optional) Prefix of the path to the IAM policy. */
    path_prefix?: any;
}