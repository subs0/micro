export interface EFSReplicationConfiguration {
    resource: Resource[];
}

export interface Resource {
    efs_replication_configuration: EFSReplicationConfigurationClass;
}

export interface EFSReplicationConfigurationClass {
    /** (Required) The ID of the file system that is to be replicated. */
    source_file_system_id:   any;
    /** (Required) A destination configuration block (documented below). */
    destination:             any;
    /** (Optional) The availability zone in which the replica should be created. If specified, the replica will be created with One Zone storage. If omitted, regional storage will be used. */
    availability_zone_name?: any;
    /** (Optional) The Key ID, ARN, alias, or alias ARN of the KMS key that should be used to encrypt the replica file system. If omitted, the default KMS key for EFS `/aws/elasticfilesystem` will be used. */
    kms_key_id?:             any;
    /** (Optional) The region in which the replica should be created. */
    region?:                 any;
}