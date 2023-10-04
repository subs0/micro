export interface S3BucketObjects {
    data: Datum[];
}

export interface Datum {
    s3_bucket_objects: S3BucketObjectsClass;
}

export interface S3BucketObjectsClass {
    /** (Required) Lists object keys in this S3 bucket. Alternatively, an [S3 access point](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html) ARN can be specified */
    bucket:         any;
    /** (Optional) Limits results to object keys with this prefix (Default: none) */
    prefix?:        any;
    /** (Optional) Character used to group keys (Default: none) */
    delimiter?:     any;
    /** (Optional) Encodes keys using this method (Default: none; besides none, only "url" can be used) */
    encoding_type?: any;
    /** (Optional) Maximum object keys to return (Default: 1000) */
    max_keys?:      any;
    /** (Optional) Returns key names lexicographically after a specific object key in your bucket (Default: none; S3 lists object keys in UTF-8 character encoding in lexicographical order) */
    start_after?:   any;
    /** (Optional) Boolean specifying whether to populate the owner list (Default: false) */
    fetch_owner?:   any;
}