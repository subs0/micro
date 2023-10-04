export interface S3BucketIntelligentTieringConfiguration {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_intelligent_tiering_configuration: S3BucketIntelligentTieringConfigurationClass;
}

export interface S3BucketIntelligentTieringConfigurationClass {
    /** (Required) Name of the bucket this intelligent tiering configuration is associated with. */
    bucket:      any;
    /** (Required) Unique name used to identify the S3 Intelligent-Tiering configuration for the bucket. */
    name:        any;
    /** (Optional) Specifies the status of the configuration. Valid values: `Enabled`, `Disabled`. */
    status?:     any;
    /** (Optional) Bucket filter. The configuration only includes objects that meet the filter's criteria (documented below). */
    filter?:     any;
    /** (Required) S3 Intelligent-Tiering storage class tiers of the configuration (documented below). */
    tiering:     any;
    /** (Optional) Object key name prefix that identifies the subset of objects to which the configuration applies. */
    prefix?:     any;
    /** (Optional) All of these tags must exist in the object's tag set in order for the configuration to apply. */
    tags?:       any;
    /** (Required) S3 Intelligent-Tiering access tier. Valid values: `ARCHIVE_ACCESS`, `DEEP_ARCHIVE_ACCESS`. */
    access_tier: any;
    /** (Required) Number of consecutive days of no access after which an object will be eligible to be transitioned to the corresponding tier. */
    days:        any;
}