export interface RDSExportTask {
    resource: Resource[];
}

export interface Resource {
    rds_export_task: RDSExportTaskClass;
}

export interface RDSExportTaskClass {
    /** (Required) Unique identifier for the snapshot export task. */
    export_task_identifier: any;
    /** (Required) ARN of the IAM role to use for writing to the Amazon S3 bucket. */
    iam_role_arn:           any;
    /** (Required) ID of the Amazon Web Services KMS key to use to encrypt the snapshot. */
    kms_key_id:             any;
    /** (Required) Name of the Amazon S3 bucket to export the snapshot to. */
    s3_bucket_name:         any;
    /** (Required) Amazon Resource Name (ARN) of the snapshot to export. */
    source_arn:             any;
    /** (Optional) Data to be exported from the snapshot. If this parameter is not provided, all the snapshot data is exported. Valid values are documented in the [AWS StartExportTask API documentation](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartExportTask.html#API_StartExportTask_RequestParameters). */
    export_only?:           any;
    /** (Optional) Amazon S3 bucket prefix to use as the file name and path of the exported snapshot. */
    s3_prefix?:             any;
}