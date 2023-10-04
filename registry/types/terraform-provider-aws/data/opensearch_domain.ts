export interface OpensearchDomain {
    data: Datum[];
}

export interface Datum {
    opensearch_domain: OpensearchDomainClass;
}

export interface OpensearchDomainClass {
    "This data source supports the following arguments:"?: any;
}