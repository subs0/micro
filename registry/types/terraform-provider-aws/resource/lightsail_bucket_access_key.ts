export interface LightsailBucketAccessKey {
    resource: Resource[];
}

export interface Resource {
    lightsail_bucket_access_key: LightsailBucketAccessKeyClass;
}

export interface LightsailBucketAccessKeyClass {
    /** (Required) The name of the bucket that the new access key will belong to, and grant access to. */
    bucket_name: any;
}