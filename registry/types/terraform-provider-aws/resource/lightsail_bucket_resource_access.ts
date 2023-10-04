export interface LightsailBucketResourceAccess {
    resource: Resource[];
}

export interface Resource {
    lightsail_bucket_resource_access: LightsailBucketResourceAccessClass;
}

export interface LightsailBucketResourceAccessClass {
    /** (Required) The name of the bucket to grant access to. */
    bucket_name:   any;
    /** (Required) The name of the resource to be granted bucket access. */
    resource_name: any;
}