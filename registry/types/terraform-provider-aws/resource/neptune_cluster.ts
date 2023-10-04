export interface NeptuneCluster {
    resource: Resource[];
}

export interface Resource {
    neptune_cluster: NeptuneClusterClass;
}

export interface NeptuneClusterClass {
    /** (Optional) Specifies whether upgrades between different major versions are allowed. You must set it to `true` when providing an `engine_version` parameter that uses a different major version than the DB cluster's current version. Default is `false`. */
    allow_major_version_upgrade?:           any;
    /** (Optional) Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`. */
    apply_immediately?:                     any;
    /** (Optional) A list of EC2 Availability Zones that instances in the Neptune cluster can be created in. */
    availability_zones?:                    any;
    /** (Optional) The days to retain backups for. Default `1` */
    backup_retention_period?:               any;
    /** (Optional, Forces new resources) The cluster identifier. If omitted, Terraform will assign a random, unique identifier. */
    cluster_identifier?:                    any;
    /** (Optional, Forces new resource) Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`. */
    cluster_identifier_prefix?:             any;
    /** (Optional) If set to true, tags are copied to any snapshot of the DB cluster that is created. */
    copy_tags_to_snapshot?:                 any;
    /** (Optional) A list of the log types this DB cluster is configured to export to Cloudwatch Logs. Currently only supports `audit`. */
    enable_cloudwatch_logs_exports?:        any;
    /** (Optional) The name of the database engine to be used for this Neptune cluster. Defaults to `neptune`. */
    engine?:                                any;
    /** (Optional) The database engine version. */
    engine_version?:                        any;
    /** (Optional) The name of your final Neptune snapshot when this Neptune cluster is deleted. If omitted, no final snapshot will be made. */
    final_snapshot_identifier?:             any;
    /** (Optional) The global cluster identifier specified on [`aws_neptune_global_cluster`](/docs/providers/aws/r/neptune_global_cluster.html). */
    global_cluster_identifier?:             any;
    /** (Optional) A List of ARNs for the IAM roles to associate to the Neptune Cluster. */
    iam_roles?:                             any;
    /** (Optional) Specifies whether or not mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled. */
    iam_database_authentication_enabled?:   any;
    /** (Optional) The ARN for the KMS encryption key. When specifying `kms_key_arn`, `storage_encrypted` needs to be set to true. */
    kms_key_arn?:                           any;
    /** (Optional) A Neptune subnet group to associate with this Neptune instance. */
    neptune_subnet_group_name?:             any;
    /** (Optional) A cluster parameter group to associate with the cluster. */
    neptune_cluster_parameter_group_name?:  any;
    /** (Optional) The name of the DB parameter group to apply to all instances of the DB cluster. */
    neptune_instance_parameter_group_name?: any;
    /** (Optional) The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. Time in UTC. Default: A 30-minute window selected at random from an 8-hour block of time per regionE.g., 04:00-09:00 */
    preferred_backup_window?:               any;
    /** (Optional) The weekly time range during which system maintenance can occur, in (UTC) e.g., wed:04:00-wed:04:30 */
    preferred_maintenance_window?:          any;
    /** (Optional) The port on which the Neptune accepts connections. Default is `8182`. */
    port?:                                  any;
    /** (Optional) ARN of a source Neptune cluster or Neptune instance if this Neptune cluster is to be created as a Read Replica. */
    replication_source_identifier?:         any;
    /** (Optional) Determines whether a final Neptune snapshot is created before the Neptune cluster is deleted. If true is specified, no Neptune snapshot is created. If false is specified, a Neptune snapshot is created before the Neptune cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`. */
    skip_final_snapshot?:                   any;
    /** (Optional) Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a Neptune cluster snapshot, or the ARN when specifying a Neptune snapshot. Automated snapshots **should not** be used for this attribute, unless from a different cluster. Automated snapshots are deleted as part of cluster destruction when the resource is replaced. */
    snapshot_identifier?:                   any;
    /** (Optional) Specifies whether the Neptune cluster is encrypted. The default is `false` if not specified. */
    storage_encrypted?:                     any;
    /** (Optional) A map of tags to assign to the Neptune cluster. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                  any;
    /** (Optional) List of VPC security groups to associate with the Cluster */
    vpc_security_group_ids?:                any;
    /** (Optional) A value that indicates whether the DB cluster has deletion protection enabled.The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. */
    deletion_protection?:                   any;
    /** (Optional) If set, create the Neptune cluster as a serverless one. See [Serverless](#serverless) for example block attributes. */
    serverless_v2_scaling_configuration?:   any;
}