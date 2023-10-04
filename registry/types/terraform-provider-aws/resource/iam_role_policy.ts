export interface IamRolePolicy {
    resource: Resource[];
}

export interface Resource {
    iam_role_policy: IamRolePolicyClass;
}

export interface IamRolePolicyClass {
    /** (Optional) The name of the role policy. If omitted, Terraform will */
    name?:        any;
    /** (Optional) Creates a unique name beginning with the specified */
    name_prefix?: any;
    /** (Required) The inline policy document. This is a JSON formatted string. For more information about building IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy) */
    policy:       any;
    /** (Required) The name of the IAM role to attach to the policy. */
    role:         any;
}