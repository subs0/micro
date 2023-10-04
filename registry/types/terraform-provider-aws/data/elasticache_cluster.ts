export interface ElasticacheCluster {
    data: Datum[];
}

export interface Datum {
    elasticache_cluster: ElasticacheClusterClass;
}

export interface ElasticacheClusterClass {
    "This data source supports the following arguments:"?: any;
}