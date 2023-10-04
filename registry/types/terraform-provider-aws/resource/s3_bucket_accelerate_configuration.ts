export interface S3BucketAccelerateConfiguration {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_accelerate_configuration: S3BucketAccelerateConfigurationClass;
}

export interface S3BucketAccelerateConfigurationClass {
    /** (Required, Forces new resource) Name of the bucket. */
    bucket?:                any;
    /** (Optional, Forces new resource) Account ID of the expected bucket owner. */
    expected_bucket_owner?: any;
    /** (Required) Transfer acceleration state of the bucket. Valid values: `Enabled`, `Suspended`. */
    status:                 any;
}