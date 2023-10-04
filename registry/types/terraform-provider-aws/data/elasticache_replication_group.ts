export interface ElasticacheReplicationGroup {
    data: Datum[];
}

export interface Datum {
    elasticache_replication_group: ElasticacheReplicationGroupClass;
}

export interface ElasticacheReplicationGroupClass {
    "This data source supports the following arguments:"?: any;
}