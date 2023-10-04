export interface Route53ZoneAssociation {
    resource: Resource[];
}

export interface Resource {
    route53_zone_association: Route53ZoneAssociationClass;
}

export interface Route53ZoneAssociationClass {
    /** (Required) The private hosted zone to associate. */
    zone_id:     any;
    /** (Required) The VPC to associate with the private hosted zone. */
    vpc_id:      any;
    /** (Optional) The VPC's region. Defaults to the region of the AWS provider. */
    vpc_region?: any;
}