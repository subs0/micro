export interface IamGroupPolicy {
    resource: Resource[];
}

export interface Resource {
    iam_group_policy: IamGroupPolicyClass;
}

export interface IamGroupPolicyClass {
    /** (Required) The policy document. This is a JSON formatted string. For more information about building IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy) */
    policy:       any;
    /** (Optional) The name of the policy. If omitted, Terraform will */
    name?:        any;
    /** (Optional) Creates a unique name beginning with the specified */
    name_prefix?: any;
    /** (Required) The IAM group to attach to the policy. */
    group:        any;
}