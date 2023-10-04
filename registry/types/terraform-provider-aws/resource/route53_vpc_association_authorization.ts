export interface Route53VpcAssociationAuthorization {
    resource: Resource[];
}

export interface Resource {
    route53_vpc_association_authorization: Route53VpcAssociationAuthorizationClass;
}

export interface Route53VpcAssociationAuthorizationClass {
    /** (Required) The ID of the private hosted zone that you want to authorize associating a VPC with. */
    zone_id:     any;
    /** (Required) The VPC to authorize for association with the private hosted zone. */
    vpc_id:      any;
    /** (Optional) The VPC's region. Defaults to the region of the AWS provider. */
    vpc_region?: any;
}