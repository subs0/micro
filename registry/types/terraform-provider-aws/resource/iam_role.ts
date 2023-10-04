export interface IamRole {
    resource: Resource[];
}

export interface Resource {
    iam_role: IamRoleClass;
}

export interface IamRoleClass {
    /** (Required) Policy that grants an entity permission to assume the role. */
    assume_role_policy:     any;
    /** (Optional) Description of the role. */
    description?:           any;
    /** (Optional) Whether to force detaching any policies the role has before destroying it. Defaults to `false`. */
    force_detach_policies?: any;
    inline_policy?:         InlinePolicy;
    /** (Optional) Set of exclusive IAM managed policy ARNs to attach to the IAM role. If this attribute is not configured, Terraform will ignore policy attachments to this resource. When configured, Terraform will align the role's managed policy attachments with this set by attaching or detaching managed policies. Configuring an empty set (i.e., `managed_policy_arns = []`) will cause Terraform to remove _all_ managed policy attachments. */
    managed_policy_arns?:   any;
    /** (Optional) Maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours. */
    max_session_duration?:  any;
    /** (Optional, Forces new resource) Friendly name of the role. If omitted, Terraform will assign a random, unique name. See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information. */
    name?:                  any;
    /** (Optional, Forces new resource) Creates a unique friendly name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:           any;
    /** (Optional) Path to the role. See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information. */
    path?:                  any;
    /** (Optional) ARN of the policy that is used to set the permissions boundary for the role. */
    permissions_boundary?:  any;
    /** Key-value mapping of tags for the IAM role. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
}

export interface InlinePolicy {
    /** (Optional, Forces new resource) Friendly name of the role. If omitted, Terraform will assign a random, unique name. See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information. */
    name:   any;
    /** (Required) Policy document as a JSON formatted string. For more information about building IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/tutorials/terraform/aws-iam-policy). */
    policy: any;
}