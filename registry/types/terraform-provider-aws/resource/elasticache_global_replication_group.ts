export interface ElasticacheGlobalReplicationGroup {
    resource: Resource[];
}

export interface Resource {
    elasticache_global_replication_group: ElasticacheGlobalReplicationGroupClass;
}

export interface ElasticacheGlobalReplicationGroupClass {
    /** (Optional) Specifies whether read-only replicas will be automatically promoted to read/write primary if the existing primary fails. */
    automatic_failover_enabled?: any;
    /** (Optional) The instance class used. */
    cache_node_type?:            any;
    /** (Optional) Redis version to use for the Global Replication Group. */
    engine_version?:             any;
    /** (Optional) The number of node groups (shards) on the global replication group. */
    num_node_groups?:            any;
    /** (Optional) An ElastiCache Parameter Group to use for the Global Replication Group. */
    parameter_group_name?:       any;
}