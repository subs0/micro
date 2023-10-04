export interface Ec2TransitGatewayRoute {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway_route: Ec2TransitGatewayRouteClass;
}

export interface Ec2TransitGatewayRouteClass {
    /** (Required) IPv4 or IPv6 RFC1924 CIDR used for destination matches. Routing decisions are based on the most specific match. */
    destination_cidr_block:         any;
    /** (Optional) Identifier of EC2 Transit Gateway Attachment (required if `blackhole` is set to false). */
    transit_gateway_attachment_id?: any;
    /** (Optional) Indicates whether to drop traffic that matches this route (default to `false`). */
    blackhole?:                     any;
    /** (Required) Identifier of EC2 Transit Gateway Route Table. */
    transit_gateway_route_table_id: any;
}