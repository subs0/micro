export interface Ec2TransitGatewayRouteTablePropagation {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway_route_table_propagation: Ec2TransitGatewayRouteTablePropagationClass;
}

export interface Ec2TransitGatewayRouteTablePropagationClass {
    /** (Required) Identifier of EC2 Transit Gateway Attachment. */
    transit_gateway_attachment_id:  any;
    /** (Required) Identifier of EC2 Transit Gateway Route Table. */
    transit_gateway_route_table_id: any;
}