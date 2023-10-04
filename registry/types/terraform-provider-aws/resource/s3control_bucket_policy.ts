export interface S3ControlBucketPolicy {
    resource: Resource[];
}

export interface Resource {
    s3control_bucket_policy: S3ControlBucketPolicyClass;
}

export interface S3ControlBucketPolicyClass {
    /** (Required) Amazon Resource Name (ARN) of the bucket. */
    bucket: any;
    /** (Required) JSON string of the resource policy. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    policy: any;
}