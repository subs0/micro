export interface SesIdentityPolicy {
    resource: Resource[];
}

export interface Resource {
    ses_identity_policy: SesIdentityPolicyClass;
}

export interface SesIdentityPolicyClass {
    /** (Required) Name or Amazon Resource Name (ARN) of the SES Identity. */
    identity: any;
    /** (Required) Name of the policy. */
    name:     any;
    /** (Required) JSON string of the policy. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    policy:   any;
}