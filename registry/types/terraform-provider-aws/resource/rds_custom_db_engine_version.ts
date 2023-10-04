export interface RDSCustomDBEngineVersion {
    resource: Resource[];
}

export interface Resource {
    rds_custom_db_engine_version: RDSCustomDBEngineVersionClass;
}

export interface RDSCustomDBEngineVersionClass {
    /** (Required) The name of the Amazon S3 bucket that contains the database installation files. */
    database_installation_files_s3_bucket_name: any;
    /** (Required) The prefix for the Amazon S3 bucket that contains the database installation files. */
    database_installation_files_s3_prefix:      any;
    /** (Optional) The description of the CEV. */
    description?:                               any;
    /** (Required) The name of the database engine. Valid values are `custom-oracle*`, `custom-sqlserver*`. */
    engine:                                     any;
    /** (Required) The version of the database engine. */
    engine_version:                             any;
    /** (Optional) The name of the manifest file within the local filesystem. Conflicts with `manifest`. */
    filename?:                                  any;
    /** (Optional) The ARN of the AWS KMS key that is used to encrypt the database installation files. Required for RDS Custom for Oracle. */
    kms_key_id?:                                any;
    /** (Optional) The manifest file, in JSON format, that contains the list of database installation files. Conflicts with `filename`. */
    manifest?:                                  any;
    /** (Optional) Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the manifest source specified with `filename`. The usual way to set this is filebase64sha256("manifest.json") where "manifest.json" is the local filename of the manifest source. */
    manifest_hash?:                             any;
    /** (Optional) The status of the CEV. Valid values are `available`, `inactive`, `inactive-except-restore`. */
    status?:                                    any;
    /** (Optional) The ID of the AMI to create the CEV from. Required for RDS Custom for SQL Server. For RDS Custom for Oracle, you can specify an AMI ID that was used in a different Oracle CEV. */
    source_image_id?:                           any;
    /** (Optional) A mapping of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                      any;
}