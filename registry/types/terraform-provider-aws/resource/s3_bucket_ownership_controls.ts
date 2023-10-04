export interface S3BucketOwnershipControls {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_ownership_controls: S3BucketOwnershipControlsClass;
}

export interface S3BucketOwnershipControlsClass {
    /** (Required) Name of the bucket that you want to associate this access point with. */
    bucket:                any;
    /** (Required) Configuration block(s) with Ownership Controls rules. Detailed below. */
    rule:                  any;
    /** (Required) Object ownership. Valid values: `BucketOwnerPreferred`, `ObjectWriter` or `BucketOwnerEnforced` */
    object_ownership:      any;
    /** Objects uploaded to the bucket change ownership to the bucket owner if the objects are uploaded with the `bucket-owner-full-control` canned ACL. */
    BucketOwnerPreferred?: any;
    /** Uploading account will own the object if the object is uploaded with the `bucket-owner-full-control` canned ACL. */
    ObjectWriter?:         any;
    /** Bucket owner automatically owns and has full control over every object in the bucket. ACLs no longer affect permissions to data in the S3 bucket. */
    BucketOwnerEnforced?:  any;
}