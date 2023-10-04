export interface DocdbCluster {
    resource: Resource[];
}

export interface Resource {
    docdb_cluster: DocdbClusterClass;
}

export interface DocdbClusterClass {
    /** (Optional) Specifies whether any cluster modifications */
    apply_immediately?:               any;
    /** (Optional) A list of EC2 Availability Zones that */
    availability_zones?:              any;
    /** (Optional) The days to retain backups for. Default `1` */
    backup_retention_period?:         any;
    /** (Optional, Forces new resource) Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifier`. */
    cluster_identifier_prefix?:       any;
    /** (Optional, Forces new resources) The cluster identifier. If omitted, Terraform will assign a random, unique identifier. */
    cluster_identifier?:              any;
    /** (Optional) A DB subnet group to associate with this DB instance. */
    db_subnet_group_name?:            any;
    /** (Optional) A cluster parameter group to associate with the cluster. */
    db_cluster_parameter_group_name?: any;
    /** (Optional) A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. */
    deletion_protection?:             any;
    /** (Optional) List of log types to export to cloudwatch. If omitted, no logs will be exported. */
    enabled_cloudwatch_logs_exports?: any;
    /** (Optional) The database engine version. Updating this argument results in an outage. */
    engine_version?:                  any;
    /** (Optional) The name of the database engine to be used for this DB cluster. Defaults to `docdb`. Valid Values: `docdb` */
    engine?:                          any;
    /** (Optional) The name of your final DB snapshot */
    final_snapshot_identifier?:       any;
    /** (Optional) The global cluster identifier specified on [`aws_docdb_global_cluster`](/docs/providers/aws/r/docdb_global_cluster.html). */
    global_cluster_identifier?:       any;
    /** (Optional) The ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true. */
    kms_key_id?:                      any;
    /** (Required unless a `snapshot_identifier` or unless a `global_cluster_identifier` is provided when the cluster is the "secondary" cluster of a global database) Password for the master DB user. Note that this may */
    master_password?:                 any;
    /** (Required unless a `snapshot_identifier` or unless a `global_cluster_identifier` is provided when the cluster is the "secondary" cluster of a global database) Username for the master DB user. */
    master_username?:                 any;
    /** (Optional) The port on which the DB accepts connections */
    port?:                            any;
    /** (Optional) The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC */
    preferred_backup_window?:         any;
    /** (Optional) The weekly time range during which system maintenance can occur, in (UTC) e.g., wed:04:00-wed:04:30 */
    preferred_maintenance_window?:    any;
    /** (Optional) Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`. */
    skip_final_snapshot?:             any;
    /** (Optional) Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot. Automated snapshots **should not** be used for this attribute, unless from a different cluster. Automated snapshots are deleted as part of cluster destruction when the resource is replaced. */
    snapshot_identifier?:             any;
    /** (Optional) Specifies whether the DB cluster is encrypted. The default is `false`. */
    storage_encrypted?:               any;
    /** (Optional) A map of tags to assign to the DB cluster. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
    /** (Optional) List of VPC security groups to associate */
    vpc_security_group_ids?:          any;
}