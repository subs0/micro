export interface S3BucketLifecycleConfiguration {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_lifecycle_configuration: S3BucketLifecycleConfigurationClass;
}

export interface S3BucketLifecycleConfigurationClass {
    /** (Required) Name of the source S3 bucket you want Amazon S3 to monitor. */
    bucket:                             any;
    /** (Optional) Account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error. */
    expected_bucket_owner?:             any;
    rule:                               Rule;
    /** (Optional) Configuration block that specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. [See below](#abort_incomplete_multipart_upload). */
    abort_incomplete_multipart_upload?: AbortIncompleteMultipartUpload;
    /** (Optional) Configuration block that specifies the expiration for the lifecycle of the object in the form of date, days and, whether the object has a delete marker. [See below](#expiration). */
    expiration?:                        Expiration;
    /** (Optional) Configuration block used to identify objects that a Lifecycle Rule applies to. [See below](#filter). If not specified, the `rule` will default to using `prefix`. */
    filter?:                            Filter;
    /** (Optional) Configuration block that specifies when noncurrent object versions expire. [See below](#noncurrent_version_expiration). */
    noncurrent_version_expiration?:     NoncurrentVersionExpiration;
    /** (Optional) Set of configuration blocks that specify the transition rule for the lifecycle rule that describes when noncurrent objects transition to a specific storage class. [See below](#noncurrent_version_transition). */
    noncurrent_version_transition?:     NoncurrentVersionTransition;
    /** (Optional) Prefix identifying one or more objects to which the rule applies. */
    prefix?:                            any;
    /** (Optional) Set of configuration blocks that specify when an Amazon S3 object transitions to a specified storage class. [See below](#transition). */
    transition?:                        Transition;
    /** (Optional) Minimum object size to which the rule applies. Value must be at least `0` if specified. */
    object_size_greater_than?:          any;
    /** (Optional) Maximum object size to which the rule applies. Value must be at least `1` if specified. */
    object_size_less_than?:             any;
    /** (Optional) Configuration block for specifying a tag key and value. [See below](#tag). */
    tag?:                               Tag;
    /** (Optional) Key-value map of resource tags. All of these tags must exist in the object's tag set in order for the rule to apply. */
    tags?:                              any;
}

export interface AbortIncompleteMultipartUpload {
    /** Number of days after which Amazon S3 aborts an incomplete multipart upload. */
    days_after_initiation: any;
}

export interface Expiration {
    /** (Optional, Conflicts with `days`) Date objects are transitioned to the specified storage class. The date value must be in [RFC3339 full-date format](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) e.g. `2023-08-22`. */
    date:                         any;
    /** (Optional, Conflicts with `date`) Number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer. If both `days` and `date` are not specified, defaults to `0`. Valid values depend on `storage_class`, see [Transition objects using Amazon S3 Lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html) for more details. */
    days:                         any;
    /** (Optional, Conflicts with `date` and `days`) Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set to `true`, the delete marker will be expired; if set to `false` the policy takes no action. */
    expired_object_delete_marker: any;
}

export interface Filter {
    /** (Optional) Minimum object size to which the rule applies. Value must be at least `0` if specified. */
    object_size_greater_than: any;
    /** (Optional) Maximum object size to which the rule applies. Value must be at least `1` if specified. */
    object_size_less_than:    any;
    /** (Optional) Prefix identifying one or more objects to which the rule applies. */
    prefix:                   any;
    /** (Optional) Configuration block for specifying a tag key and value. [See below](#tag). */
    tag:                      any;
}

export interface NoncurrentVersionExpiration {
    /** (Optional) Number of noncurrent versions Amazon S3 will retain. Must be a non-zero positive integer. */
    newer_noncurrent_versions: any;
    /** (Optional) Number of days an object is noncurrent before Amazon S3 can perform the associated action. */
    noncurrent_days:           any;
}

export interface NoncurrentVersionTransition {
    /** (Optional) Number of noncurrent versions Amazon S3 will retain. Must be a non-zero positive integer. */
    newer_noncurrent_versions: any;
    /** (Optional) Number of days an object is noncurrent before Amazon S3 can perform the associated action. */
    noncurrent_days:           any;
    /** Class of storage used to store the object. Valid Values: `GLACIER`, `STANDARD_IA`, `ONEZONE_IA`, `INTELLIGENT_TIERING`, `DEEP_ARCHIVE`, `GLACIER_IR`. */
    storage_class:             any;
}

export interface Rule {
    /** (Optional) Configuration block that specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. [See below](#abort_incomplete_multipart_upload). */
    abort_incomplete_multipart_upload?: any;
    /** (Optional) Configuration block that specifies the expiration for the lifecycle of the object in the form of date, days and, whether the object has a delete marker. [See below](#expiration). */
    expiration?:                        any;
    /** (Optional) Configuration block used to identify objects that a Lifecycle Rule applies to. [See below](#filter). If not specified, the `rule` will default to using `prefix`. */
    filter?:                            any;
    /** (Required) Unique identifier for the rule. The value cannot be longer than 255 characters. */
    id:                                 any;
    /** (Optional) Configuration block that specifies when noncurrent object versions expire. [See below](#noncurrent_version_expiration). */
    noncurrent_version_expiration?:     any;
    /** (Optional) Set of configuration blocks that specify the transition rule for the lifecycle rule that describes when noncurrent objects transition to a specific storage class. [See below](#noncurrent_version_transition). */
    noncurrent_version_transition?:     any;
    /** (Optional) Prefix identifying one or more objects to which the rule applies. */
    prefix?:                            any;
    /** (Required) Whether the rule is currently being applied. Valid values: `Enabled` or `Disabled`. */
    status:                             any;
    /** (Optional) Set of configuration blocks that specify when an Amazon S3 object transitions to a specified storage class. [See below](#transition). */
    transition?:                        any;
}

export interface Tag {
    /** (Required) Name of the object key. */
    key:   any;
    /** (Required) Value of the tag. */
    value: any;
}

export interface Transition {
    /** (Optional, Conflicts with `days`) Date objects are transitioned to the specified storage class. The date value must be in [RFC3339 full-date format](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) e.g. `2023-08-22`. */
    date:          any;
    /** (Optional, Conflicts with `date`) Number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer. If both `days` and `date` are not specified, defaults to `0`. Valid values depend on `storage_class`, see [Transition objects using Amazon S3 Lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html) for more details. */
    days:          any;
    /** Class of storage used to store the object. Valid Values: `GLACIER`, `STANDARD_IA`, `ONEZONE_IA`, `INTELLIGENT_TIERING`, `DEEP_ARCHIVE`, `GLACIER_IR`. */
    storage_class: any;
}