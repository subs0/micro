export interface ElasticacheReplicationGroup {
    resource: Resource[];
}

export interface Resource {
    elasticache_replication_group: ElasticacheReplicationGroupClass;
}

export interface ElasticacheReplicationGroupClass {
    /** (Optional) Specifies whether any modifications are applied immediately, or during the next maintenance window. Default is `false`. */
    apply_immediately?:           any;
    /** (Optional) Whether to enable encryption at rest. */
    at_rest_encryption_enabled?:  any;
    /** (Optional) Password used to access a password protected server. Can be specified only if `transit_encryption_enabled = true`. */
    auth_token?:                  any;
    /** (Optional) Specifies whether minor version engine upgrades will be applied automatically to the underlying Cache Cluster instances during the maintenance window. */
    auto_minor_version_upgrade?:  any;
    /** (Optional) Specifies whether a read-only replica will be automatically promoted to read/write primary if the existing primary fails. If enabled, `num_cache_clusters` must be greater than 1. Must be enabled for Redis (cluster mode enabled) replication groups. Defaults to `false`. */
    automatic_failover_enabled?:  any;
    /** (Optional) Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to `true` when using r6gd nodes. */
    data_tiering_enabled?:        any;
    /** (Optional) Name of the cache engine to be used for the clusters in this replication group. The only valid value is `redis`. */
    engine?:                      any;
    /** (Optional) Version number of the cache engine to be used for the cache clusters in this replication group. */
    engine_version?:              any;
    /** (Optional) The name of your final node group (shard) snapshot. ElastiCache creates the snapshot from the primary node in the cluster. If omitted, no final snapshot will be made. */
    final_snapshot_identifier?:   any;
    /** (Optional) The ID of the global replication group to which this replication group should belong. If this parameter is specified, the replication group is added to the specified global replication group as a secondary replication group; otherwise, the replication group is not part of any global replication group. If `global_replication_group_id` is set, the `num_node_groups` parameter cannot be set. */
    global_replication_group_id?: any;
    /** (Optional) The ARN of the key that you wish to use if encrypting at rest. If not supplied, uses service managed encryption. Can be specified only if `at_rest_encryption_enabled = true`. */
    kms_key_id?:                  any;
    /** (Optional, Redis only) Specifies the destination and format of Redis [SLOWLOG](https://redis.io/commands/slowlog) or Redis [Engine Log](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html#Log_contents-engine-log). See the documentation on [Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html#Log_contents-engine-log). See [Log Delivery Configuration](#log-delivery-configuration) below for more details. */
    log_delivery_configuration?:  any;
    /** (Optional) Specifies whether to enable Multi-AZ Support for the replication group. If `true`, `automatic_failover_enabled` must also be enabled. Defaults to `false`. */
    multi_az_enabled?:            any;
    /** (Optional) Instance class to be used. See AWS documentation for information on [supported node types](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html) and [guidance on selecting node types](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/nodes-select-size.html). Required unless `global_replication_group_id` is set. Cannot be set if `global_replication_group_id` is set. */
    node_type?:                   any;
    /** (Optional) Number of cache clusters (primary and replicas) this replication group will have. If Multi-AZ is enabled, the value of this parameter must be at least 2. Updates will occur before other modifications. Conflicts with `num_node_groups`. Defaults to `1`. */
    num_cache_clusters?:          any;
    /** (Optional) Number of node groups (shards) for this Redis replication group. */
    num_node_groups?:             any;
    /** (Optional) Name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used. To enable "cluster mode", i.e., data sharding, use a parameter group that has the parameter `cluster-enabled` set to true. */
    parameter_group_name?:        any;
    /** (Optional) List of EC2 availability zones in which the replication group's cache clusters will be created. The order of the availability zones in the list is considered. The first item in the list will be the primary node. Ignored when updating. */
    preferred_cache_cluster_azs?: any;
    /** (Optional) Number of replica nodes in each node group. */
    replicas_per_node_group?:     any;
    /** (Optional) One or more Amazon VPC security groups associated with this replication group. Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud */
    security_group_ids?:          any;
    /** (Optional) List of cache security group names to associate with this replication group. */
    security_group_names?:        any;
    /** (Optional) Name of a snapshot from which to restore data into the new node group. Changing the `snapshot_name` forces a new resource. */
    snapshot_name?:               any;
    /** (Optional, Redis only) Number of days for which ElastiCache will retain automatic cache cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, then a snapshot that was taken today will be retained for 5 days before being deleted. If the value of `snapshot_retention_limit` is set to zero (0), backups are turned off. Please note that setting a `snapshot_retention_limit` is not supported on cache.t1.micro cache nodes */
    snapshot_retention_limit?:    any;
    /** (Optional, Redis only) Daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your cache cluster. The minimum snapshot window is a 60 minute period. Example: `05:00-09:00` */
    snapshot_window?:             any;
    /** (Optional) Name of the cache subnet group to be used for the replication group. */
    subnet_group_name?:           any;
    /** (Optional) Map of tags to assign to the resource. Adding tags to this resource will add or overwrite any existing tags on the clusters in the replication group and not to the group itself. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
    /** (Optional) Whether to enable encryption in transit. */
    transit_encryption_enabled?:  any;
    /** (Optional) User Group ID to associate with the replication group. Only a maximum of one (1) user group ID is valid. **NOTE:** This argument _is_ a set because the AWS specification allows for multiple IDs. However, in practice, AWS only allows a maximum size of one. */
    user_group_ids?:              any;
    /** Name of either the CloudWatch Logs LogGroup or Kinesis Data Firehose resource. */
    destination?:                 any;
    /** For CloudWatch Logs use `cloudwatch-logs` or for Kinesis Data Firehose use `kinesis-firehose`. */
    destination_type?:            any;
    /** Valid values are `json` or `text` */
    log_format?:                  any;
    /** Valid values are  `slow-log` or `engine-log`. Max 1 of each. */
    log_type?:                    any;
}