export interface IamPolicy {
    resource: Resource[];
}

export interface Resource {
    iam_policy: IamPolicyClass;
}

export interface IamPolicyClass {
    /** (Optional, Forces new resource) Description of the IAM policy. */
    description?: any;
    /** (Optional, Forces new resource) The name of the policy. If omitted, Terraform will assign a random, unique name. */
    name?:        any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?: any;
    /** (Optional, default "/") Path in which to create the policy. */
    path?:        any;
    /** (Required) The policy document. This is a JSON formatted string. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy) */
    policy:       any;
    /** (Optional) Map of resource tags for the IAM Policy. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}