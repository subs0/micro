export interface RDSClusterActivityStream {
    resource: Resource[];
}

export interface Resource {
    rds_cluster_activity_stream: RDSClusterActivityStreamClass;
}

export interface RDSClusterActivityStreamClass {
    /** (Required, Forces new resources) The Amazon Resource Name (ARN) of the DB cluster. */
    resource_arn?:                        any;
    /** (Required, Forces new resources) Specifies the mode of the database activity stream. Database events such as a change or access generate an activity stream event. The database session can handle these events either synchronously or asynchronously. One of: `sync`, `async`. */
    mode?:                                any;
    /** (Required, Forces new resources) The AWS KMS key identifier for encrypting messages in the database activity stream. The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. */
    kms_key_id?:                          any;
    /** (Optional, Forces new resources) Specifies whether the database activity stream includes engine-native audit fields. This option only applies to an Oracle DB instance. By default, no engine-native audit fields are included. Defaults `false`. */
    engine_native_audit_fields_included?: any;
}