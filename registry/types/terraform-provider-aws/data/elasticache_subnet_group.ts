export interface ElasticacheSubnetGroup {
    data: Datum[];
}

export interface Datum {
    elasticache_subnet_group: ElasticacheSubnetGroupClass;
}

export interface ElasticacheSubnetGroupClass {
    /** (Required) Name of the subnet group. */
    name: any;
}