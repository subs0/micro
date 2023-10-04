export interface Ec2LocalGatewayRoute {
    resource: Resource[];
}

export interface Resource {
    ec2_local_gateway_route: Ec2LocalGatewayRouteClass;
}

export interface Ec2LocalGatewayRouteClass {
    /** (Required) IPv4 CIDR range used for destination matches. Routing decisions are based on the most specific match. */
    destination_cidr_block:                   any;
    /** (Required) Identifier of EC2 Local Gateway Route Table. */
    local_gateway_route_table_id:             any;
    /** (Required) Identifier of EC2 Local Gateway Virtual Interface Group. */
    local_gateway_virtual_interface_group_id: any;
}