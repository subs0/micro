export interface IamUserPolicy {
    resource: Resource[];
}

export interface Resource {
    iam_user_policy: IamUserPolicyClass;
}

export interface IamUserPolicyClass {
    /** (Required) The policy document. This is a JSON formatted string. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    policy:       any;
    /** (Optional) The name of the policy. If omitted, Terraform will assign a random, unique name. */
    name?:        any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?: any;
    /** (Required) IAM user to which to attach this policy. */
    user:         any;
}