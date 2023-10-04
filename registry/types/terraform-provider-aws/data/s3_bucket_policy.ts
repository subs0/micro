export interface S3BucketPolicy {
    data: Datum[];
}

export interface Datum {
    s3_bucket_policy: S3BucketPolicyClass;
}

export interface S3BucketPolicyClass {
    /** (Required) Bucket name. */
    bucket: any;
}