export interface S3Bucket {
    resource: Resource[];
}

export interface Resource {
    s3_bucket: { [key: any]: string };
}