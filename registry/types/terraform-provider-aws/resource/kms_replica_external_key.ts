export interface KmsReplicaExternalKey {
    resource: Resource[];
}

export interface Resource {
    kms_replica_external_key: KmsReplicaExternalKeyClass;
}

export interface KmsReplicaExternalKeyClass {
    /** (Optional) A flag to indicate whether to bypass the key policy lockout safety check. */
    bypass_policy_lockout_safety_check?: any;
    /** (Optional) The waiting period, specified in number of days. After the waiting period ends, AWS KMS deletes the KMS key. */
    deletion_window_in_days?:            any;
    /** (Optional) A description of the KMS key. */
    description?:                        any;
    /** (Optional) Specifies whether the replica key is enabled. Disabled KMS keys cannot be used in cryptographic operations. Keys pending import can only be `false`. Imported keys default to `true` unless expired. */
    enabled?:                            any;
    /** (Optional) Base64 encoded 256-bit symmetric encryption key material to import. The KMS key is permanently associated with this key material. The same key material can be [reimported](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html#reimport-key-material), but you cannot import different key material. */
    key_material_base64?:                any;
    /** (Optional) The key policy to attach to the KMS key. If you do not specify a key policy, AWS KMS attaches the [default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default) to the KMS key. */
    policy?:                             any;
    /** (Required) The ARN of the multi-Region primary key to replicate. The primary key must be in a different AWS Region of the same AWS Partition. You can create only one replica of a given primary key in each AWS Region. */
    primary_key_arn:                     any;
    /** (Optional) A map of tags to assign to the replica key. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                               any;
    /** (Optional) Time at which the imported key material expires. When the key material expires, AWS KMS deletes the key material and the key becomes unusable. If not specified, key material does not expire. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`) */
    valid_to?:                           any;
}