export interface S3BucketObject {
    data: Datum[];
}

export interface Datum {
    s3_bucket_object: S3BucketObjectClass;
}

export interface S3BucketObjectClass {
    /** (Required) Name of the bucket to read the object from. Alternatively, an [S3 access point](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html) ARN can be specified */
    bucket:      any;
    /** (Required) Full path to the object inside the bucket */
    key:         any;
    /** (Optional) Specific version ID of the object returned (defaults to latest version) */
    version_id?: any;
}