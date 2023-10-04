export interface S3BucketServerSideEncryptionConfiguration {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_server_side_encryption_configuration: S3BucketServerSideEncryptionConfigurationClass;
}

export interface S3BucketServerSideEncryptionConfigurationClass {
    /** (Required, Forces new resource) ID (name) of the bucket. */
    bucket?:                                  any;
    /** (Optional, Forces new resource) Account ID of the expected bucket owner. */
    expected_bucket_owner?:                   any;
    rule?:                                    Rule;
    /** (Optional) Single object for setting server-side encryption by default. [See below](#apply_server_side_encryption_by_default). */
    apply_server_side_encryption_by_default?: ApplyServerSideEncryptionByDefault;
}

export interface ApplyServerSideEncryptionByDefault {
    /** (Required) Server-side encryption algorithm to use. Valid values are `AES256`, `aws:kms`, and `aws:kms:dsse` */
    sse_algorithm:     any;
    /** (Optional) AWS KMS master key ID used for the SSE-KMS encryption. This can only be used when you set the value of `sse_algorithm` as `aws:kms`. The default `aws/s3` AWS KMS master key is used if this element is absent while the `sse_algorithm` is `aws:kms`. */
    kms_master_key_id: any;
}

export interface Rule {
    /** (Optional) Single object for setting server-side encryption by default. [See below](#apply_server_side_encryption_by_default). */
    apply_server_side_encryption_by_default: any;
    /** (Optional) Whether or not to use [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) for SSE-KMS. */
    bucket_key_enabled:                      any;
}