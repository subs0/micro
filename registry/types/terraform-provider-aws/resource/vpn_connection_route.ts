export interface VPNConnectionRoute {
    resource: Resource[];
}

export interface Resource {
    vpn_connection_route: VPNConnectionRouteClass;
}

export interface VPNConnectionRouteClass {
    /** (Required) The CIDR block associated with the local subnet of the customer network. */
    destination_cidr_block: any;
    /** (Required) The ID of the VPN connection. */
    vpn_connection_id:      any;
}