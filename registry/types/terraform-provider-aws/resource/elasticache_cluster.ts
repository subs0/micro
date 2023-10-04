export interface ElasticacheCluster {
    resource: Resource[];
}

export interface Resource {
    elasticache_cluster: ElasticacheClusterClass;
}

export interface ElasticacheClusterClass {
    /** (Optional) Whether any database modifications are applied immediately, or during the next maintenance window. Default is `false`. See [Amazon ElastiCache Documentation for more information.](https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheCluster.html). */
    apply_immediately?:            any;
    /** (Optional) Specifies whether minor version engine upgrades will be applied automatically to the underlying Cache Cluster instances during the maintenance window. */
    auto_minor_version_upgrade?:   any;
    /** (Optional) Availability Zone for the cache cluster. If you want to create cache nodes in multi-az, use `preferred_availability_zones` instead. Default: System chosen Availability Zone. Changing this value will re-create the resource. */
    availability_zone?:            any;
    /** (Optional, Memcached only) Whether the nodes in this Memcached node group are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region. Valid values for this parameter are `single-az` or `cross-az`, default is `single-az`. If you want to choose `cross-az`, `num_cache_nodes` must be greater than `1`. */
    az_mode?:                      any;
    /** (Optional, Redis only) Name of your final cluster snapshot. If omitted, no final snapshot will be made. */
    final_snapshot_identifier?:    any;
    /** (Optional) The IP version to advertise in the discovery protocol. Valid values are `ipv4` or `ipv6`. */
    ip_discovery?:                 any;
    /** (Optional, Redis only) Specifies the destination and format of Redis [SLOWLOG](https://redis.io/commands/slowlog) or Redis [Engine Log](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html#Log_contents-engine-log). See the documentation on [Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Log_Delivery.html). See [Log Delivery Configuration](#log-delivery-configuration) below for more details. */
    log_delivery_configuration?:   any;
    /** (Optional) The IP versions for cache cluster connections. IPv6 is supported with Redis engine `6.2` onword or Memcached version `1.6.6` for all [Nitro system](https://aws.amazon.com/ec2/nitro/) instances. Valid values are `ipv4`, `ipv6` or `dual_stack`. */
    network_type?:                 any;
    /** (Optional) Specify the outpost mode that will apply to the cache cluster creation. Valid values are `"single-outpost"` and `"cross-outpost"`, however AWS currently only supports `"single-outpost"` mode. */
    outpost_mode?:                 any;
    /** (Optional, Memcached only) List of the Availability Zones in which cache nodes are created. If you are creating your cluster in an Amazon VPC you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group. The number of Availability Zones listed must equal the value of `num_cache_nodes`. If you want all the nodes in the same Availability Zone, use `availability_zone` instead, or repeat the Availability Zone multiple times in the list. Default: System chosen Availability Zones. Detecting drift of existing node availability zone is not currently supported. Updating this argument by itself to migrate existing node availability zones is not currently supported and will show a perpetual difference. */
    preferred_availability_zones?: any;
    /** (Optional, Required if `outpost_mode` is specified) The outpost ARN in which the cache cluster will be created. */
    preferred_outpost_arn?:        any;
    /** (Optional, Required if `engine` is not specified) ID of the replication group to which this cluster should belong. If this parameter is specified, the cluster is added to the specified replication group as a read replica; otherwise, the cluster is a standalone primary that is not part of any replication group. */
    replication_group_id?:         any;
    /** (Optional, Redis only) Name of a snapshot from which to restore data into the new node group. Changing `snapshot_name` forces a new resource. */
    snapshot_name?:                any;
    /** (Optional, Redis only) Number of days for which ElastiCache will retain automatic cache cluster snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, then a snapshot that was taken today will be retained for 5 days before being deleted. If the value of SnapshotRetentionLimit is set to zero (0), backups are turned off. Please note that setting a `snapshot_retention_limit` is not supported on cache.t1.micro cache nodes */
    snapshot_retention_limit?:     any;
    /** (Optional, Redis only) Daily time range (in UTC) during which ElastiCache will begin taking a daily snapshot of your cache cluster. Example: 05:00-09:00 */
    snapshot_window?:              any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                         any;
    /** (Optional) Enable encryption in-transit. Supported only with Memcached versions `1.6.12` and later, running in a VPC. See the [ElastiCache in-transit encryption](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/in-transit-encryption-mc.html) documentation for more details. */
    transit_encryption_enabled?:   any;
    /** Name of either the CloudWatch Logs LogGroup or Kinesis Data Firehose resource. */
    destination?:                  any;
    /** For CloudWatch Logs use `cloudwatch-logs` or for Kinesis Data Firehose use `kinesis-firehose`. */
    destination_type?:             any;
    /** Valid values are `json` or `text` */
    log_format?:                   any;
    /** Valid values are  `slow-log` or `engine-log`. Max 1 of each. */
    log_type?:                     any;
}