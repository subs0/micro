export interface Ec2TransitGatewayRouteTableAssociation {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway_route_table_association: Ec2TransitGatewayRouteTableAssociationClass;
}

export interface Ec2TransitGatewayRouteTableAssociationClass {
    /** (Required) Identifier of EC2 Transit Gateway Attachment. */
    transit_gateway_attachment_id:  any;
    /** (Required) Identifier of EC2 Transit Gateway Route Table. */
    transit_gateway_route_table_id: any;
    /** (Optional) Boolean whether the Gateway Attachment should remove any current Route Table association before associating with the specified Route Table. Default value: `false`. This argument is intended for use with EC2 Transit Gateways shared into the current account, otherwise the `transit_gateway_default_route_table_association` argument of the `aws_ec2_transit_gateway_vpc_attachment` resource should be used. */
    replace_existing_association?:  any;
}