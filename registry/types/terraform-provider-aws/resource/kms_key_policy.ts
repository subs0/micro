export interface KmsKeyPolicy {
    resource: Resource[];
}

export interface Resource {
    kms_key_policy: KmsKeyPolicyClass;
}

export interface KmsKeyPolicyClass {
    /** (Required) The ID of the KMS Key to attach the policy. */
    key_id:                              any;
    /** (Required) A valid policy JSON document. Although this is a key policy, not an IAM policy, an [`aws_iam_policy_document`](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document), in the form that designates a principal, can be used. For more information about building policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    policy:                              any;
    /** (Optional) A flag to indicate whether to bypass the key policy lockout safety check. */
    bypass_policy_lockout_safety_check?: any;
}