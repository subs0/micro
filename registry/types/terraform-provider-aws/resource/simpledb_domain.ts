export interface SimpledbDomain {
    resource: Resource[];
}

export interface Resource {
    simpledb_domain: SimpledbDomainClass;
}

export interface SimpledbDomainClass {
    /** (Required) The name of the SimpleDB domain */
    name: any;
}