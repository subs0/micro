export interface NeptuneClusterInstance {
    resource: Resource[];
}

export interface Resource {
    neptune_cluster_instance: NeptuneClusterInstanceClass;
}

export interface NeptuneClusterInstanceClass {
    /** (Optional) Specifies whether any instance modifications */
    apply_immediately?:            any;
    /** (Optional) Indicates that minor engine upgrades will be applied automatically to the instance during the maintenance window. Default is `true`. */
    auto_minor_version_upgrade?:   any;
    /** (Optional) The EC2 Availability Zone that the neptune instance is created in. */
    availability_zone?:            any;
    /** (Required) The identifier of the [`aws_neptune_cluster`](/docs/providers/aws/r/neptune_cluster.html) in which to launch this instance. */
    cluster_identifier:            any;
    /** (Optional) The name of the database engine to be used for the neptune instance. Defaults to `neptune`. Valid Values: `neptune`. */
    engine?:                       any;
    /** (Optional) The neptune engine version. */
    engine_version?:               any;
    /** (Optional, Forces new resource) The identifier for the neptune instance, if omitted, Terraform will assign a random, unique identifier. */
    identifier?:                   any;
    /** (Optional, Forces new resource) Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`. */
    identifier_prefix?:            any;
    /** (Required) The instance class to use. */
    instance_class:                any;
    /** (Required if `publicly_accessible = false`, Optional otherwise) A subnet group to associate with this neptune instance. **NOTE:** This must match the `neptune_subnet_group_name` of the attached [`aws_neptune_cluster`](/docs/providers/aws/r/neptune_cluster.html). */
    neptune_subnet_group_name?:    any;
    /** (Optional) The name of the neptune parameter group to associate with this instance. */
    neptune_parameter_group_name?: any;
    /** (Optional) The port on which the DB accepts connections. Defaults to `8182`. */
    port?:                         any;
    /** (Optional) The daily time range during which automated backups are created if automated backups are enabled. Eg: "04:00-09:00" */
    preferred_backup_window?:      any;
    /** (Optional) The window to perform maintenance in. */
    preferred_maintenance_window?: any;
    /** (Optional) Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer. */
    promotion_tier?:               any;
    /** (Optional) Bool to control if instance is publicly accessible. Default is `false`. */
    publicly_accessible?:          any;
    /** (Optional) A map of tags to assign to the instance. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                         any;
}