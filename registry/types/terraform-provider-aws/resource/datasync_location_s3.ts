export interface DatasyncLocationS3 {
    resource: Resource[];
}

export interface Resource {
    datasync_location_s3: DatasyncLocationS3Class;
}

export interface DatasyncLocationS3Class {
    /** (Optional) A list of DataSync Agent ARNs with which this location will be associated. */
    agent_arns?:            any;
    /** (Required) Amazon Resource Name (ARN) of the S3 Bucket. */
    s3_bucket_arn:          any;
    /** (Required) Configuration block containing information for connecting to S3. */
    s3_config:              any;
    /** (Optional) The Amazon S3 storage class that you want to store your files in when this location is used as a task destination. [Valid values](https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes)   */
    s3_storage_class?:      any;
    /** (Required) Prefix to perform actions as source or destination. */
    subdirectory:           any;
    /** (Optional) Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
    /** (Required) ARN of the IAM Role used to connect to the S3 Bucket. */
    bucket_access_role_arn: any;
}