export interface Route53CIDRLocation {
    resource: Resource[];
}

export interface Resource {
    route53_cidr_location: Route53CIDRLocationClass;
}

export interface Route53CIDRLocationClass {
    /** (Required) CIDR blocks for the location. */
    cidr_blocks:        any;
    /** (Required) The ID of the CIDR collection to update. */
    cidr_collection_id: any;
    /** (Required) Name for the CIDR location. */
    name:               any;
}