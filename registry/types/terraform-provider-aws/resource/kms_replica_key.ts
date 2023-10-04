export interface KmsReplicaKey {
    resource: Resource[];
}

export interface Resource {
    kms_replica_key: KmsReplicaKeyClass;
}

export interface KmsReplicaKeyClass {
    /** (Optional) A flag to indicate whether to bypass the key policy lockout safety check. */
    bypass_policy_lockout_safety_check?: any;
    /** (Optional) The waiting period, specified in number of days. After the waiting period ends, AWS KMS deletes the KMS key. */
    deletion_window_in_days?:            any;
    /** (Optional) A description of the KMS key. */
    description?:                        any;
    /** (Optional) Specifies whether the replica key is enabled. Disabled KMS keys cannot be used in cryptographic operations. The default value is `true`. */
    enabled?:                            any;
    /** (Optional) The key policy to attach to the KMS key. If you do not specify a key policy, AWS KMS attaches the [default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default) to the KMS key. */
    policy?:                             any;
    /** (Required) The ARN of the multi-Region primary key to replicate. The primary key must be in a different AWS Region of the same AWS Partition. You can create only one replica of a given primary key in each AWS Region. */
    primary_key_arn:                     any;
    /** (Optional) A map of tags to assign to the replica key. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                               any;
}