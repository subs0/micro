export interface S3BucketPolicy {
    resource: Resource[];
}

export interface Resource {
    s3_bucket_policy: S3BucketPolicyClass;
}

export interface S3BucketPolicyClass {
    /** (Required) Name of the bucket to which to apply the policy. */
    bucket: any;
    /** (Required) Text of the policy. Although this is a bucket policy rather than an IAM policy, the [`aws_iam_policy_document`](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) data source may be used, so long as it specifies a principal. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). Note: Bucket policies are limited to 20 KB in size. */
    policy: any;
}