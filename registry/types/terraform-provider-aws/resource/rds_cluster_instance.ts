export interface RDSClusterInstance {
    resource: Resource[];
}

export interface Resource {
    rds_cluster_instance: RDSClusterInstanceClass;
}

export interface RDSClusterInstanceClass {
    /** (Optional) Specifies whether any database modifications are applied immediately, or during the next maintenance window. Default is`false`. */
    apply_immediately?:                     any;
    /** (Optional) Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`. */
    auto_minor_version_upgrade?:            any;
    /** (Optional, Computed, Forces new resource) EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details. */
    availability_zone?:                     any;
    /** (Optional) Identifier of the CA certificate for the DB instance. */
    ca_cert_identifier?:                    any;
    /** (Required, Forces new resource) Identifier of the [`aws_rds_cluster`](/docs/providers/aws/r/rds_cluster.html) in which to launch this instance. */
    cluster_identifier?:                    any;
    /** (Optional) Instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. */
    custom_iam_instance_profile?:           any;
    /** (Optional) Name of the DB parameter group to associate with this instance. */
    db_parameter_group_name?:               any;
    /** (Required if `publicly_accessible = false`, Optional otherwise, Forces new resource) DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` of the attached [`aws_rds_cluster`](/docs/providers/aws/r/rds_cluster.html). */
    db_subnet_group_name?:                  any;
    /** (Optional) Database engine version. */
    engine_version?:                        any;
    /** (Required, Forces new resource) Name of the database engine to be used for the RDS instance. Valid Values: `aurora-mysql`, `aurora-postgresql`, `mysql`, `postgres`. */
    engine?:                                any;
    /** (Optional, Forces new resource) Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`. */
    identifier_prefix?:                     any;
    /** (Optional, Forces new resource) Identifier for the RDS instance, if omitted, Terraform will assign a random, unique identifier. */
    identifier?:                            any;
    /** (Required) Instance class to use. For details on CPU and memory, see [Scaling Aurora DB Instances][4]. Aurora uses `db.*` instance classes/types. Please see [AWS Documentation][7] for currently available instance classes and complete details. */
    instance_class:                         any;
    /** (Optional) Interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60. */
    monitoring_interval?:                   any;
    /** (Optional) ARN for the IAM role that permits RDS to send enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html) what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances. */
    monitoring_role_arn?:                   any;
    /** (Optional) Specifies whether Performance Insights is enabled or not. */
    performance_insights_enabled?:          any;
    /** (Optional) ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true. */
    performance_insights_kms_key_id?:       any;
    /** (Optional) Amount of time in days to retain Performance Insights data. Valid values are `7`, `731` (2 years) or a multiple of `31`. When specifying `performance_insights_retention_period`, `performance_insights_enabled` needs to be set to true. Defaults to '7'. */
    performance_insights_retention_period?: any;
    /** (Optional) Daily time range during which automated backups are created if automated backups are enabled. Eg: "04:00-09:00". **NOTE:** If `preferred_backup_window` is set at the cluster level, this argument **must** be omitted. */
    preferred_backup_window?:               any;
    /** (Optional) Window to perform maintenance in. Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00". */
    preferred_maintenance_window?:          any;
    /** (Optional) Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoted to writer. */
    promotion_tier?:                        any;
    /** (Optional) Bool to control if instance is publicly accessible. Default `false`. See the documentation on [Creating DB Instances][6] for more details on controlling this property. */
    publicly_accessible?:                   any;
    /** (Optional) Map of tags to assign to the instance. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                  any;
}