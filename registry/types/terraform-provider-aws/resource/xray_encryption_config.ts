export interface XrayEncryptionConfig {
    resource: Resource[];
}

export interface Resource {
    xray_encryption_config: XrayEncryptionConfigClass;
}

export interface XrayEncryptionConfigClass {
    /** (Required) The type of encryption. Set to `KMS` to use your own key for encryption. Set to `NONE` for default encryption. */
    type:    any;
    /** (Optional) An AWS KMS customer master key (CMK) ARN. */
    key_id?: any;
}