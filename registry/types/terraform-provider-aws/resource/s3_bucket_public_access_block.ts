export interface S3BucketPublicAccessBlock {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_public_access_block: S3BucketPublicAccessBlockClass;
}

export interface S3BucketPublicAccessBlockClass {
    /** (Required) S3 Bucket to which this Public Access Block configuration should be applied. */
    bucket:                   any;
    /** (Optional) Whether Amazon S3 should block public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior: */
    block_public_acls?:       any;
    /** (Optional) Whether Amazon S3 should block public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the existing bucket policy. When set to `true` causes Amazon S3 to: */
    block_public_policy?:     any;
    /** (Optional) Whether Amazon S3 should ignore public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to: */
    ignore_public_acls?:      any;
    /** (Optional) Whether Amazon S3 should restrict public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the previously stored bucket policy, except that public and cross-account access within the public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`: */
    restrict_public_buckets?: any;
}