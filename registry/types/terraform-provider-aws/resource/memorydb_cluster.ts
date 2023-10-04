export interface MemorydbCluster {
    resource: Resource[];
}

export interface Resource {
    memorydb_cluster: MemorydbClusterClass;
}

export interface MemorydbClusterClass {
    /** (Required) The name of the Access Control List to associate with the cluster. */
    acl_name:                    any;
    /** (Required) The compute and memory capacity of the nodes in the cluster. See AWS documentation on [supported node types](https://docs.aws.amazon.com/memorydb/latest/devguide/nodes.supportedtypes.html) as well as [vertical scaling](https://docs.aws.amazon.com/memorydb/latest/devguide/cluster-vertical-scaling.html). */
    node_type:                   any;
    /** (Optional, Forces new resource) When set to `true`, the cluster will automatically receive minor engine version upgrades after launch. Defaults to `true`. */
    auto_minor_version_upgrade?: any;
    /** (Optional, Forces new resource) Enables data tiering. This option is not supported by all instance types. For more information, see [Data tiering](https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html). */
    data_tiering?:               any;
    /** (Optional) Description for the cluster. Defaults to `"Managed by Terraform"`. */
    description?:                any;
    /** (Optional) Version number of the Redis engine to be used for the cluster. Downgrades are not supported. */
    engine_version?:             any;
    /** (Optional) Name of the final cluster snapshot to be created when this resource is deleted. If omitted, no final snapshot will be made. */
    final_snapshot_name?:        any;
    /** (Optional, Forces new resource) ARN of the KMS key used to encrypt the cluster at rest. */
    kms_key_arn?:                any;
    /** (Optional) Specifies the weekly time range during which maintenance on the cluster is performed. Specify as a range in the format `ddd:hh24:mi-ddd:hh24:mi` (24H Clock UTC). The minimum maintenance window is a 60 minute period. Example: `sun:23:00-mon:01:30`. */
    maintenance_window?:         any;
    /** (Optional, Forces new resource) Name of the cluster. If omitted, Terraform will assign a random, unique name. Conflicts with `name_prefix`. */
    name?:                       any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:                any;
    /** (Optional) The number of replicas to apply to each shard, up to a maximum of 5. Defaults to `1` (i.e. 2 nodes per shard). */
    num_replicas_per_shard?:     any;
    /** (Optional) The number of shards in the cluster. Defaults to `1`. */
    num_shards?:                 any;
    /** (Optional) The name of the parameter group associated with the cluster. */
    parameter_group_name?:       any;
    /** (Optional, Forces new resource) The port number on which each of the nodes accepts connections. Defaults to `6379`. */
    port?:                       any;
    /** (Optional) Set of VPC Security Group ID-s to associate with this cluster. */
    security_group_ids?:         any;
    /** (Optional, Forces new resource) List of ARN-s that uniquely identify RDB snapshot files stored in S3. The snapshot files will be used to populate the new cluster. Object names in the ARN-s cannot contain any commas. */
    snapshot_arns?:              any;
    /** (Optional, Forces new resource) The name of a snapshot from which to restore data into the new cluster. */
    snapshot_name?:              any;
    /** (Optional) The number of days for which MemoryDB retains automatic snapshots before deleting them. When set to `0`, automatic backups are disabled. Defaults to `0`. */
    snapshot_retention_limit?:   any;
    /** (Optional) The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard. Example: `05:00-09:00`. */
    snapshot_window?:            any;
    /** (Optional) ARN of the SNS topic to which cluster notifications are sent. */
    sns_topic_arn?:              any;
    /** (Optional, Forces new resource) The name of the subnet group to be used for the cluster. Defaults to a subnet group consisting of default VPC subnets. */
    subnet_group_name?:          any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                       any;
    /** (Optional, Forces new resource) A flag to enable in-transit encryption on the cluster. When set to `false`, the `acl_name` must be `open-access`. Defaults to `true`. */
    tls_enabled?:                any;
}