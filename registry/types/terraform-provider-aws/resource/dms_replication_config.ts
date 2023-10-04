export interface DmsReplicationConfig {
    resource: Resource[];
}

export interface Resource {
    dms_replication_config: DmsReplicationConfigClass;
}

export interface DmsReplicationConfigClass {
    /** (Required) Configuration block for provisioning an DMS Serverless replication. */
    compute_config:                any;
    /** (Optional) Whether to run or stop the serverless replication, default is false. */
    start_replication?:            any;
    /** (Required) Unique identifier that you want to use to create the config. */
    replication_config_identifier: any;
    /** (Required) The migration type. Can be one of `full-load | cdc | full-load-and-cdc`. */
    replication_type:              any;
    /** (Required) The Amazon Resource Name (ARN) string that uniquely identifies the source endpoint. */
    source_endpoint_arn:           any;
    /** (Required) An escaped JSON string that contains the table mappings. For information on table mapping see [Using Table Mapping with an AWS Database Migration Service Task to Select and Filter Data](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html) */
    table_mappings:                any;
    /** (Required) The Amazon Resource Name (ARN) string that uniquely identifies the target endpoint. */
    target_endpoint_arn:           any;
    /** (Optional) An escaped JSON string that are used to provision this replication configuration. For example, [Change processing tuning settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.ChangeProcessingTuning.html) */
    replication_settings?:         any;
    /** (Optional) Unique value or name that you set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource. For more information, see [Fine-grained access control using resource names and tags](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.FineGrainedAccess) */
    resource_identifier?:          any;
    /** (Optional) JSON settings for specifying supplemental data. For more information see [Specifying supplemental data for task settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html) */
    supplemental_settings?:        any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                         any;
    /** (Optional) The Availability Zone where the DMS Serverless replication using this configuration will run. The default value is a random. */
    availability_zone?:            any;
    /** (Optional) A list of custom DNS name servers supported for the DMS Serverless replication to access your source or target database. */
    dns_name_servers?:             any;
    /** (Optional) An Key Management Service (KMS) key Amazon Resource Name (ARN) that is used to encrypt the data during DMS Serverless replication. If you don't specify a value for the KmsKeyId parameter, DMS uses your default encryption key. */
    kms_key_id?:                   any;
    /** (Required) Specifies the maximum value of the DMS capacity units (DCUs) for which a given DMS Serverless replication can be provisioned. A single DCU is 2GB of RAM, with 2 DCUs as the minimum value allowed. The list of valid DCU values includes 2, 4, 8, 16, 32, 64, 128, 192, 256, and 384. */
    max_capacity_units:            any;
    /** (Optional) Specifies the minimum value of the DMS capacity units (DCUs) for which a given DMS Serverless replication can be provisioned. The list of valid DCU values includes 2, 4, 8, 16, 32, 64, 128, 192, 256, and 384. If this value isn't set DMS scans the current activity of available source tables to identify an optimum setting for this parameter. */
    min_capacity_units?:           any;
    /** (Optional) Specifies if the replication instance is a multi-az deployment. You cannot set the `availability_zone` parameter if the `multi_az` parameter is set to `true`. */
    multi_az?:                     any;
    /** (Optional) The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). */
    preferred_maintenance_window?: any;
    /** (Optional) Specifies a subnet group identifier to associate with the DMS Serverless replication. */
    replication_subnet_group_id?:  any;
    /** (Optional) Specifies the virtual private cloud (VPC) security group to use with the DMS Serverless replication. The VPC security group must work with the VPC containing the replication. */
    vpc_security_group_ids?:       any;
}