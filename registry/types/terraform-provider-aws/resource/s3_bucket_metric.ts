export interface S3BucketMetric {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_metric: S3BucketMetricClass;
}

export interface S3BucketMetricClass {
    /** (Required) Name of the bucket to put metric configuration. */
    bucket:  any;
    /** (Required) Unique identifier of the metrics configuration for the bucket. Must be less than or equal to 64 characters in length. */
    name:    any;
    /** (Optional) [Object filtering](http://docs.aws.amazon.com/AmazonS3/latest/dev/metrics-configurations.html#metrics-configurations-filter) that accepts a prefix, tags, or a logical AND of prefix and tags (documented below). */
    filter?: any;
    /** (Optional) Object prefix for filtering (singular). */
    prefix?: any;
    /** (Optional) Object tags for filtering (up to 10). */
    tags?:   any;
}