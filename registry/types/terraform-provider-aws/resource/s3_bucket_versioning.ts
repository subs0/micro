export interface S3BucketVersioning {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_versioning: S3BucketVersioningClass;
}

export interface S3BucketVersioningClass {
    /** (Required, Forces new resource) Name of the S3 bucket. */
    bucket?:                  any;
    versioning_configuration: VersioningConfiguration;
    /** (Optional, Forces new resource) Account ID of the expected bucket owner. */
    expected_bucket_owner?:   any;
    /** (Optional, Required if `versioning_configuration` `mfa_delete` is enabled) Concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. */
    mfa?:                     any;
}

export interface VersioningConfiguration {
    /** (Required) Versioning state of the bucket. Valid values: `Enabled`, `Suspended`, or `Disabled`. `Disabled` should only be used when creating or importing resources that correspond to unversioned S3 buckets. */
    status:      any;
    /** (Optional) Specifies whether MFA delete is enabled in the bucket versioning configuration. Valid values: `Enabled` or `Disabled`. */
    mfa_delete?: any;
}