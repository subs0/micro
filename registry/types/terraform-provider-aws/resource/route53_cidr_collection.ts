export interface Route53CIDRCollection {
    resource: Resource[];
}

export interface Resource {
    route53_cidr_collection: Route53CIDRCollectionClass;
}

export interface Route53CIDRCollectionClass {
    /** (Required) Unique name for the CIDR collection. */
    name: any;
}