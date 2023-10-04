export interface ElasticsearchDomain {
    data: Datum[];
}

export interface Datum {
    elasticsearch_domain: ElasticsearchDomainClass;
}

export interface ElasticsearchDomainClass {
    "This data source supports the following arguments:"?: any;
}