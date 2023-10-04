export interface S3ControlBucketLifecycleConfiguration {
    resource: Resource[];
}

export interface Resource {
    s3control_bucket_lifecycle_configuration: S3ControlBucketLifecycleConfigurationClass;
}

export interface S3ControlBucketLifecycleConfigurationClass {
    /** (Required) Amazon Resource Name (ARN) of the bucket. */
    bucket:                             any;
    /** (Required) Configuration block(s) containing lifecycle rules for the bucket. */
    rule:                               any;
    /** (Optional) Configuration block containing settings for abort incomplete multipart upload. */
    abort_incomplete_multipart_upload?: any;
    /** (Required) Number of days after which Amazon S3 aborts an incomplete multipart upload. */
    days_after_initiation:              any;
    /** (Optional) Configuration block containing settings for expiration of objects. */
    expiration?:                        any;
    /** (Optional) Date the object is to be deleted. Should be in `YYYY-MM-DD` date format, e.g., `2020-09-30`. */
    date?:                              any;
    /** (Optional) Number of days before the object is to be deleted. */
    days?:                              any;
    /** (Optional) Enable to remove a delete marker with no noncurrent versions. Cannot be specified with `date` or `days`. */
    expired_object_delete_marker?:      any;
    /** (Optional) Configuration block containing settings for filtering. */
    filter?:                            any;
    /** (Optional) Object prefix for rule filtering. */
    prefix?:                            any;
    /** (Optional) Key-value map of object tags for rule filtering. */
    tags?:                              any;
    /** (Required) Unique identifier for the rule. */
    id:                                 any;
    /** (Optional) Status of the rule. Valid values: `Enabled` and `Disabled`. Defaults to `Enabled`. */
    status?:                            any;
}