export interface GlueSecurityConfiguration {
    resource: Resource[];
}

export interface Resource {
    glue_security_configuration: GlueSecurityConfigurationClass;
}

export interface GlueSecurityConfigurationClass {
    "cloudwatch_encryption ":       any;
    "job_bookmarks_encryption ":    any;
    /** (Required) A `s3_encryption ` block as described below, which contains encryption configuration for S3 data. */
    s3_encryption:                  any;
    /** (Optional) Encryption mode to use for CloudWatch data. Valid values: `DISABLED`, `SSE-KMS`. Default value: `DISABLED`. */
    cloudwatch_encryption_mode?:    any;
    /** (Optional) Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data. */
    kms_key_arn?:                   any;
    /** (Optional) Encryption mode to use for job bookmarks data. Valid values: `CSE-KMS`, `DISABLED`. Default value: `DISABLED`. */
    job_bookmarks_encryption_mode?: any;
    /** (Optional) Encryption mode to use for S3 data. Valid values: `DISABLED`, `SSE-KMS`, `SSE-S3`. Default value: `DISABLED`. */
    s3_encryption_mode?:            any;
}