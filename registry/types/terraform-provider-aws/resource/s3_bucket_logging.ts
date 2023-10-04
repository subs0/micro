export interface S3BucketLogging {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_logging: S3BucketLoggingClass;
}

export interface S3BucketLoggingClass {
    /** (Required, Forces new resource) Name of the bucket. */
    bucket?:                any;
    /** (Optional, Forces new resource) Account ID of the expected bucket owner. */
    expected_bucket_owner?: any;
    /** (Required) Name of the bucket where you want Amazon S3 to store server access logs. */
    target_bucket:          any;
    /** (Required) Prefix for all log object keys. */
    target_prefix:          any;
    target_grant?:          TargetGrant;
    /** (Required) Configuration block for the person being granted permissions. [See below](#grantee). */
    grantee:                Grantee;
}

export interface Grantee {
    /** (Optional) Email address of the grantee. See [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for supported AWS regions where this argument can be specified. */
    email_address?: any;
    /** (Optional) Canonical user ID of the grantee. */
    id?:            any;
    /** (Required) Type of grantee. Valid values: `CanonicalUser`, `AmazonCustomerByEmail`, `Group`. */
    type:           any;
    /** (Optional) URI of the grantee group. */
    uri?:           any;
}

export interface TargetGrant {
    /** (Required) Configuration block for the person being granted permissions. [See below](#grantee). */
    grantee:    any;
    /** (Required) Logging permissions assigned to the grantee for the bucket. Valid values: `FULL_CONTROL`, `READ`, `WRITE`. */
    permission: any;
}