export interface S3AccountPublicAccessBlock {
    resource: Resource[];
}

export interface Resource {
    s3_account_public_access_block: S3AccountPublicAccessBlockClass;
}

export interface S3AccountPublicAccessBlockClass {
    /** (Optional) AWS account ID to configure. Defaults to automatically determined account ID of the Terraform AWS provider. */
    account_id?:              any;
    /** (Optional) Whether Amazon S3 should block public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior: */
    block_public_acls?:       any;
    /** (Optional) Whether Amazon S3 should block public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect existing bucket policies. When set to `true` causes Amazon S3 to: */
    block_public_policy?:     any;
    /** (Optional) Whether Amazon S3 should ignore public ACLs for buckets in this account. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to: */
    ignore_public_acls?:      any;
    /** (Optional) Whether Amazon S3 should restrict public bucket policies for buckets in this account. Defaults to `false`. Enabling this setting does not affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`: */
    restrict_public_buckets?: any;
}