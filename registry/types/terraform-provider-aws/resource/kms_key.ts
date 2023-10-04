export interface KmsKey {
    resource: Resource[];
}

export interface Resource {
    kms_key: KmsKeyClass;
}

export interface KmsKeyClass {
    /** (Optional) The description of the key as viewed in AWS console. */
    description?:                        any;
    /** (Optional) Specifies the intended use of the key. Valid values: `ENCRYPT_DECRYPT`, `SIGN_VERIFY`, or `GENERATE_VERIFY_MAC`. */
    key_usage?:                          any;
    /** (Optional) ID of the KMS [Custom Key Store](https://docs.aws.amazon.com/kms/latest/developerguide/create-cmk-keystore.html) where the key will be stored instead of KMS (eg CloudHSM). */
    custom_key_store_id?:                any;
    /** (Optional) Specifies whether the key contains a symmetric key or an asymmetric key pair and the encryption algorithms or signing algorithms that the key supports. */
    customer_master_key_spec?:           any;
    /** (Optional) A valid policy JSON document. Although this is a key policy, not an IAM policy, an [`aws_iam_policy_document`](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document), in the form that designates a principal, can be used. For more information about building policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    policy?:                             any;
    /** (Optional) A flag to indicate whether to bypass the key policy lockout safety check. */
    bypass_policy_lockout_safety_check?: any;
    /** (Optional) The waiting period, specified in number of days. After the waiting period ends, AWS KMS deletes the KMS key. */
    deletion_window_in_days?:            any;
    /** (Optional) Specifies whether the key is enabled. Defaults to `true`. */
    is_enabled?:                         any;
    /** (Optional) Specifies whether [key rotation](http://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) is enabled. Defaults to `false`. */
    enable_key_rotation?:                any;
    /** (Optional) Indicates whether the KMS key is a multi-Region (`true`) or regional (`false`) key. Defaults to `false`. */
    multi_region?:                       any;
    /** (Optional) A map of tags to assign to the object. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                               any;
}