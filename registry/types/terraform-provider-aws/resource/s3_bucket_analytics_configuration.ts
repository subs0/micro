export interface S3BucketAnalyticsConfiguration {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_analytics_configuration: S3BucketAnalyticsConfigurationClass;
}

export interface S3BucketAnalyticsConfigurationClass {
    /** (Required) Name of the bucket this analytics configuration is associated with. */
    bucket:                  any;
    /** (Required) Unique identifier of the analytics configuration for the bucket. */
    name:                    any;
    /** (Optional) Object filtering that accepts a prefix, tags, or a logical AND of prefix and tags (documented below). */
    filter?:                 any;
    /** (Optional) Configuration for the analytics data export (documented below). */
    storage_class_analysis?: any;
    /** (Optional) Prefix to append to exported analytics data. */
    prefix?:                 any;
    /** (Optional) Set of object tags for filtering. */
    tags?:                   any;
    /** (Required) Data export configuration (documented below). */
    data_export:             any;
    /** (Optional) Schema version of exported analytics data. Allowed values: `V_1`. Default value: `V_1`. */
    output_schema_version?:  any;
    /** (Required) Specifies the destination for the exported analytics data (documented below). */
    destination:             any;
    /** (Required) Analytics data export currently only supports an S3 bucket destination (documented below). */
    s3_bucket_destination:   any;
    /** (Required) ARN of the destination bucket. */
    bucket_arn:              any;
    /** (Optional) Account ID that owns the destination bucket. */
    bucket_account_id?:      any;
    /** (Optional) Output format of exported analytics data. Allowed values: `CSV`. Default value: `CSV`. */
    format?:                 any;
}