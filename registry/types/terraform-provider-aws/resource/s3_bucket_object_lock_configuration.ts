export interface S3BucketObjectLockConfiguration {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_object_lock_configuration: S3BucketObjectLockConfigurationClass;
}

export interface S3BucketObjectLockConfigurationClass {
    /** (Required, Forces new resource) Name of the bucket. */
    bucket?:                any;
    /** (Optional, Forces new resource) Account ID of the expected bucket owner. */
    expected_bucket_owner?: any;
    /** (Optional, Forces new resource) Indicates whether this bucket has an Object Lock configuration enabled. Defaults to `Enabled`. Valid values: `Enabled`. */
    object_lock_enabled?:   any;
    rule?:                  Rule;
    /** (Optional) Token to allow Object Lock to be enabled for an existing bucket. You must contact AWS support for the bucket's "Object Lock token". */
    token?:                 any;
    /** (Required) Configuration block for specifying the default Object Lock retention settings for new objects placed in the specified bucket. [See below](#default_retention). */
    default_retention:      DefaultRetention;
}

export interface DefaultRetention {
    /** (Optional, Required if `years` is not specified) Number of days that you want to specify for the default retention period. */
    days?:  any;
    /** (Required) Default Object Lock retention mode you want to apply to new objects placed in the specified bucket. Valid values: `COMPLIANCE`, `GOVERNANCE`. */
    mode:   any;
    /** (Optional, Required if `days` is not specified) Number of years that you want to specify for the default retention period. */
    years?: any;
}

export interface Rule {
    /** (Required) Configuration block for specifying the default Object Lock retention settings for new objects placed in the specified bucket. [See below](#default_retention). */
    default_retention: any;
}