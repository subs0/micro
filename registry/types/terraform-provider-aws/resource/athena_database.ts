export interface AthenaDatabase {
    resource: Resource[];
}

export interface Resource {
    athena_database: AthenaDatabaseClass;
}

export interface AthenaDatabaseClass {
    /** (Required) Name of S3 bucket to save the results of the query execution. */
    bucket:                    any;
    /** (Required) Name of the database to create. */
    name:                      any;
    /** (Optional) That an Amazon S3 canned ACL should be set to control ownership of stored query results. See [ACL Configuration](#acl-configuration) below. */
    acl_configuration?:        any;
    /** (Optional) Description of the database. */
    comment?:                  any;
    /** (Optional) Encryption key block AWS Athena uses to decrypt the data in S3, such as an AWS Key Management Service (AWS KMS) key. See [Encryption Configuration](#encryption-configuration) below. */
    encryption_configuration?: any;
    /** (Optional) AWS account ID that you expect to be the owner of the Amazon S3 bucket. */
    expected_bucket_owner?:    any;
    /** (Optional, Default: false) Boolean that indicates all tables should be deleted from the database so that the database can be destroyed without error. The tables are *not* recoverable. */
    force_destroy?:            any;
    /** (Optional) Key-value map of custom metadata properties for the database definition. */
    properties?:               any;
    /** (Required) Amazon S3 canned ACL that Athena should specify when storing query results. Valid value is `BUCKET_OWNER_FULL_CONTROL`. */
    s3_acl_option:             any;
    /** (Required) Type of key; one of `SSE_S3`, `SSE_KMS`, `CSE_KMS` */
    encryption_option:         any;
    /** (Optional) KMS key ARN or ID; required for key types `SSE_KMS` and `CSE_KMS`. */
    kms_key?:                  any;
}