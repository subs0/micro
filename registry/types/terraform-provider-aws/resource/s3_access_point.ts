export interface S3AccessPoint {
    resource: Resource[];
}

export interface Resource {
    s3_access_point: S3AccessPointClass;
}

export interface S3AccessPointClass {
    /** (Required) Name of an AWS Partition S3 Bucket or the ARN of S3 on Outposts Bucket that you want to associate this access point with. */
    bucket:                             any;
    /** (Required) Name you want to assign to this access point. */
    name:                               any;
    /** (Optional) AWS account ID for the owner of the bucket for which you want to create an access point. Defaults to automatically determined account ID of the Terraform AWS provider. */
    account_id?:                        any;
    /** (Optional) AWS account ID associated with the S3 bucket associated with this access point. */
    bucket_account_id?:                 any;
    /** (Optional) Valid JSON document that specifies the policy that you want to apply to this access point. Removing `policy` from your configuration or setting `policy` to null or an empty string (i.e., `policy = ""`) _will not_ delete the policy since it could have been set by `aws_s3control_access_point_policy`. To remove the `policy`, set it to `"{}"` (an empty JSON document). */
    policy?:                            any;
    /** (Optional) Configuration block to manage the `PublicAccessBlock` configuration that you want to apply to this Amazon S3 bucket. You can enable the configuration options in any combination. Detailed below. */
    public_access_block_configuration?: any;
    /** (Optional) Configuration block to restrict access to this access point to requests from the specified Virtual Private Cloud (VPC). Required for S3 on Outposts. Detailed below. */
    vpc_configuration?:                 any;
    /** (Optional) Whether Amazon S3 should block public ACLs for buckets in this account. Defaults to `true`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior: */
    block_public_acls?:                 any;
    /** (Optional) Whether Amazon S3 should block public bucket policies for buckets in this account. Defaults to `true`. Enabling this setting does not affect existing bucket policies. When set to `true` causes Amazon S3 to: */
    block_public_policy?:               any;
    /** (Optional) Whether Amazon S3 should ignore public ACLs for buckets in this account. Defaults to `true`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to: */
    ignore_public_acls?:                any;
    /** (Optional) Whether Amazon S3 should restrict public bucket policies for buckets in this account. Defaults to `true`. Enabling this setting does not affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`: */
    restrict_public_buckets?:           any;
    /** (Required)  This access point will only allow connections from the specified VPC ID. */
    vpc_id:                             any;
}