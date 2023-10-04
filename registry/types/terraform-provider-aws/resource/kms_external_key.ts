export interface KmsExternalKey {
    resource: Resource[];
}

export interface Resource {
    kms_external_key: KmsExternalKeyClass;
}

export interface KmsExternalKeyClass {
    /** (Optional) Specifies whether to disable the policy lockout check performed when creating or updating the key's policy. Setting this value to `true` increases the risk that the key becomes unmanageable. For more information, refer to the scenario in the [Default Key Policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) section in the AWS Key Management Service Developer Guide. Defaults to `false`. */
    bypass_policy_lockout_safety_check?: any;
    /** (Optional) Duration in days after which the key is deleted after destruction of the resource. Must be between `7` and `30` days. Defaults to `30`. */
    deletion_window_in_days?:            any;
    /** (Optional) Description of the key. */
    description?:                        any;
    /** (Optional) Specifies whether the key is enabled. Keys pending import can only be `false`. Imported keys default to `true` unless expired. */
    enabled?:                            any;
    /** (Optional) Base64 encoded 256-bit symmetric encryption key material to import. The CMK is permanently associated with this key material. The same key material can be reimported, but you cannot import different key material. */
    key_material_base64?:                any;
    /** (Optional) Indicates whether the KMS key is a multi-Region (`true`) or regional (`false`) key. Defaults to `false`. */
    multi_region?:                       any;
    /** (Optional) A key policy JSON document. If you do not provide a key policy, AWS KMS attaches a default key policy to the CMK. */
    policy?:                             any;
    /** (Optional) A key-value map of tags to assign to the key. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                               any;
    /** (Optional) Time at which the imported key material expires. When the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. If not specified, key material does not expire. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`) */
    valid_to?:                           any;
}