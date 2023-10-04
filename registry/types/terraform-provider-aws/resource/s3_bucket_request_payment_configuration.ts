export interface S3BucketRequestPaymentConfiguration {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_request_payment_configuration: S3BucketRequestPaymentConfigurationClass;
}

export interface S3BucketRequestPaymentConfigurationClass {
    /** (Required, Forces new resource) Name of the bucket. */
    bucket?:                any;
    /** (Optional, Forces new resource) Account ID of the expected bucket owner. */
    expected_bucket_owner?: any;
    /** (Required) Specifies who pays for the download and request fees. Valid values: `BucketOwner`, `Requester`. */
    payer:                  any;
}