export interface Ec2TransitGatewayMulticastDomainAssociation {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway_multicast_domain_association: Ec2TransitGatewayMulticastDomainAssociationClass;
}

export interface Ec2TransitGatewayMulticastDomainAssociationClass {
    /** (Required) The ID of the subnet to associate with the transit gateway multicast domain. */
    subnet_id:                           any;
    /** (Required) The ID of the transit gateway attachment. */
    transit_gateway_attachment_id:       any;
    /** (Required) The ID of the transit gateway multicast domain. */
    transit_gateway_multicast_domain_id: any;
}