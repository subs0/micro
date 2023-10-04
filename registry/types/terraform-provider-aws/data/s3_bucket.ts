export interface S3Bucket {
    data: Datum[];
}

export interface Datum {
    s3_bucket: S3BucketClass;
}

export interface S3BucketClass {
    /** (Required) Name of the bucket */
    bucket: any;
}