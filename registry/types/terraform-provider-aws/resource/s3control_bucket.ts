export interface S3ControlBucket {
    resource: Resource[];
}

export interface Resource {
    s3control_bucket: S3ControlBucketClass;
}

export interface S3ControlBucketClass {
    /** (Required) Name of the bucket. */
    bucket:     any;
    /** (Required) Identifier of the Outpost to contain this bucket. */
    outpost_id: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:      any;
}