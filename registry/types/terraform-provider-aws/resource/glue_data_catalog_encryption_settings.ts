export interface GlueDataCatalogEncryptionSettings {
    resource: Resource[];
}

export interface Resource {
    glue_data_catalog_encryption_settings: GlueDataCatalogEncryptionSettingsClass;
}

export interface GlueDataCatalogEncryptionSettingsClass {
    connection_password_encryption: ConnectionPasswordEncryption;
    encryption_at_rest:             EncryptionAtREST;
}

export interface ConnectionPasswordEncryption {
    /** (Required) When set to `true`, passwords remain encrypted in the responses of GetConnection and GetConnections. This encryption takes effect independently of the catalog encryption. */
    return_connection_password_encrypted: any;
    /** (Optional) A KMS key ARN that is used to encrypt the connection password. If connection password protection is enabled, the caller of CreateConnection and UpdateConnection needs at least `kms:Encrypt` permission on the specified AWS KMS key, to encrypt passwords before storing them in the Data Catalog. */
    aws_kms_key_id?:                      any;
}

export interface EncryptionAtREST {
    /** (Required) The encryption-at-rest mode for encrypting Data Catalog data. Valid values are `DISABLED` and `SSE-KMS`. */
    catalog_encryption_mode: any;
    /** (Optional) The ARN of the AWS KMS key to use for encryption at rest. */
    sse_aws_kms_key_id?:     any;
}