export interface DmsReplicationInstance {
    resource: Resource[];
}

export interface Resource {
    dms_replication_instance: DmsReplicationInstanceClass;
}

export interface DmsReplicationInstanceClass {
    /** (Optional, Default: 50, Min: 5, Max: 6144) The amount of storage (in gigabytes) to be initially allocated for the replication instance. */
    allocated_storage?:            any;
    /** (Optional, Default: false) Indicates that major version upgrades are allowed. */
    allow_major_version_upgrade?:  any;
    /** (Optional, Default: false) Indicates whether the changes should be applied immediately or during the next maintenance window. Only used when updating an existing resource. */
    apply_immediately?:            any;
    /** (Optional, Default: false) Indicates that minor engine upgrades will be applied automatically to the replication instance during the maintenance window. */
    auto_minor_version_upgrade?:   any;
    /** (Optional) The EC2 Availability Zone that the replication instance will be created in. */
    availability_zone?:            any;
    /** (Optional) The engine version number of the replication instance. */
    engine_version?:               any;
    /** (Optional) The Amazon Resource Name (ARN) for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region. */
    kms_key_arn?:                  any;
    /** (Optional) Specifies if the replication instance is a multi-az deployment. You cannot set the `availability_zone` parameter if the `multi_az` parameter is set to `true`. */
    multi_az?:                     any;
    /** (Optional) The type of IP address protocol used by a replication instance. Valid values: `IPV4`, `DUAL`. */
    network_type?:                 any;
    /** (Optional) The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). */
    preferred_maintenance_window?: any;
    /** (Optional, Default: false) Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address. */
    publicly_accessible?:          any;
    /** (Required) The compute and memory capacity of the replication instance as specified by the replication instance class. See [AWS DMS User Guide](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.Types.html) for available instance sizes and advice on which one to choose. */
    replication_instance_class:    any;
    /** (Required) The replication instance identifier. This parameter is stored as a lowercase string. */
    replication_instance_id:       any;
    /** (Optional) A subnet group to associate with the replication instance. */
    replication_subnet_group_id?:  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                         any;
    /** (Optional) A list of VPC security group IDs to be used with the replication instance. The VPC security groups must work with the VPC containing the replication instance. */
    vpc_security_group_ids?:       any;
}