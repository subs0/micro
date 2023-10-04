export interface ElasticacheUser {
    data: Datum[];
}

export interface Datum {
    elasticache_user: ElasticacheUserClass;
}

export interface ElasticacheUserClass {
    "This data source supports the following arguments:"?: any;
}