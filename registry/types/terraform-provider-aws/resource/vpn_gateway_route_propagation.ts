export interface VPNGatewayRoutePropagation {
    resource: Resource[];
}

export interface Resource {
    vpn_gateway_route_propagation: VPNGatewayRoutePropagationClass;
}

export interface VPNGatewayRoutePropagationClass {
    /** The id of the `aws_vpn_gateway` to propagate routes from. */
    vpn_gateway_id?: any;
    /** The id of the `aws_route_table` to propagate routes into. */
    route_table_id?: any;
}