export interface LightsailBucket {
    resource: Resource[];
}

export interface Resource {
    lightsail_bucket: LightsailBucketClass;
}

export interface LightsailBucketClass {
    /** (Required) The name for the bucket. */
    name:          any;
    /** (Required) - The ID of the bundle to use for the bucket. A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket. Use the [get-bucket-bundles](https://docs.aws.amazon.com/cli/latest/reference/lightsail/get-bucket-bundles.html) cli command to get a list of bundle IDs that you can specify. */
    bundle_id:     any;
    /** (Optional) - Force Delete non-empty buckets using `terraform destroy`. AWS by default will not delete an s3 bucket which is not empty, to prevent losing bucket data and affecting other resources in lightsail. If `force_delete` is set to `true` the bucket will be deleted even when not empty. */
    force_delete?: any;
    /** (Optional) A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
}