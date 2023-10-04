export interface RedshiftCluster {
    resource: Resource[];
}

export interface Resource {
    redshift_cluster: RedshiftClusterClass;
}

export interface RedshiftClusterClass {
    /** (Required) The Cluster Identifier. Must be a lower case string. */
    cluster_identifier:                    any;
    /** (Optional) The name of the first database to be created when the cluster is created. */
    database_name?:                        any;
    /** (Optional) The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was created. */
    default_iam_role_arn?:                 any;
    /** (Required) The node type to be provisioned for the cluster. */
    node_type:                             any;
    /** (Optional) The cluster type to use. Either `single-node` or `multi-node`. */
    cluster_type?:                         any;
    /** (Required unless a `snapshot_identifier` is provided) Password for the master DB user. */
    master_password?:                      any;
    /** (Required unless a `snapshot_identifier` is provided) Username for the master DB user. */
    master_username?:                      any;
    /** (Optional) A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster. */
    vpc_security_group_ids?:               any;
    /** (Optional) The name of a cluster subnet group to be associated with this cluster. If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC). */
    cluster_subnet_group_name?:            any;
    /** (Optional) The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency. Can only be changed if `availability_zone_relocation_enabled` is `true`. */
    availability_zone?:                    any;
    /** (Optional) If true, the cluster can be relocated to another availabity zone, either automatically by AWS or when requested. Default is `false`. Available for use on clusters from the RA3 instance family. */
    availability_zone_relocation_enabled?: any;
    /** (Optional) The weekly time range (in UTC) during which automated cluster maintenance can occur. */
    preferred_maintenance_window?:         any;
    /** (Optional) The name of the parameter group to be associated with this cluster. */
    cluster_parameter_group_name?:         any;
    /** (Optional) The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with create-cluster-snapshot. Default is 1. */
    automated_snapshot_retention_period?:  any;
    /** (Optional) The port number on which the cluster accepts incoming connections. Valid values are between `1115` and `65535`. */
    port?:                                 any;
    /** (Optional) The version of the Amazon Redshift engine software that you want to deploy on the cluster. */
    cluster_version?:                      any;
    /** (Optional) If true , major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. Default is `true`. */
    allow_version_upgrade?:                any;
    /** (Optional) Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`. */
    apply_immediately?:                    any;
    /** (Optional, **Deprecated**) The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored. */
    aqua_configuration_status?:            any;
    /** (Optional) The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node. Default is 1. */
    number_of_nodes?:                      any;
    /** (Optional) If true, the cluster can be accessed from a public network. Default is `true`. */
    publicly_accessible?:                  any;
    /** (Optional) If true , the data in the cluster is encrypted at rest. */
    encrypted?:                            any;
    /** (Optional) If true , enhanced VPC routing is enabled. */
    enhanced_vpc_routing?:                 any;
    /** (Optional) The ARN for the KMS encryption key. When specifying `kms_key_id`, `encrypted` needs to be set to true. */
    kms_key_id?:                           any;
    /** (Optional) The Elastic IP (EIP) address for the cluster. */
    elastic_ip?:                           any;
    /** (Optional) Determines whether a final snapshot of the cluster is created before Amazon Redshift deletes the cluster. If true , a final cluster snapshot is not created. If false , a final cluster snapshot is created before the cluster is deleted. Default is false. */
    skip_final_snapshot?:                  any;
    /** (Optional) The identifier of the final snapshot that is to be created immediately before deleting the cluster. If this parameter is provided, `skip_final_snapshot` must be false. */
    final_snapshot_identifier?:            any;
    /** (Optional) The name of the snapshot from which to create the new cluster. */
    snapshot_identifier?:                  any;
    /** (Optional) The name of the cluster the source snapshot was created from. */
    snapshot_cluster_identifier?:          any;
    /** (Optional) The AWS customer account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot. */
    owner_account?:                        any;
    /** (Optional) A list of IAM Role ARNs to associate with the cluster. A Maximum of 10 can be associated to the cluster at any time. */
    iam_roles?:                            any;
    /** (Optional) Logging, documented below. */
    logging?:                              any;
    /** (Optional) The name of the maintenance track for the restored cluster. When you take a snapshot, the snapshot inherits the MaintenanceTrack value from the cluster. The snapshot might be on a different track than the cluster that was the source for the snapshot. For example, suppose that you take a snapshot of  a cluster that is on the current track and then change the cluster to be on the trailing track. In this case, the snapshot and the source cluster are on different tracks. Default value is `current`. */
    maintenance_track_name?:               any;
    /** (Optional)  The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots. Valid values are between `-1` and `3653`. Default value is `-1`. */
    manual_snapshot_retention_period?:     any;
    /** (Optional) Configuration of automatic copy of snapshots from one region to another. Documented below. */
    snapshot_copy?:                        any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                 any;
    /** (Required) Enables logging information such as queries and connection attempts, for the specified Amazon Redshift cluster. */
    enable:                                any;
    /** (Optional, required when `enable` is `true` and `log_destination_type` is `s3`) The name of an existing S3 bucket where the log files are to be stored. Must be in the same region as the cluster and the cluster must have read bucket and put object permissions. */
    bucket_name?:                          any;
    /** (Optional) The prefix applied to the log file names. */
    s3_key_prefix?:                        any;
    /** (Optional) The log destination type. An enum with possible values of `s3` and `cloudwatch`. */
    log_destination_type?:                 any;
    /** (Optional) The collection of exported log types. Log types include the connection log, user log and user activity log. Required when `log_destination_type` is `cloudwatch`. Valid log types are `connectionlog`, `userlog`, and `useractivitylog`. */
    log_exports?:                          any;
    /** (Required) The destination region that you want to copy snapshots to. */
    destination_region:                    any;
    /** (Optional) The number of days to retain automated snapshots in the destination region after they are copied from the source region. Defaults to `7`. */
    retention_period?:                     any;
    /** (Optional) The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region. */
    grant_name?:                           any;
}