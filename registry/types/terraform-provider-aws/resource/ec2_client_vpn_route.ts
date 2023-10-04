export interface Ec2ClientVPNRoute {
    resource: Resource[];
}

export interface Resource {
    ec2_client_vpn_route: Ec2ClientVPNRouteClass;
}

export interface Ec2ClientVPNRouteClass {
    /** (Required) The ID of the Client VPN endpoint. */
    client_vpn_endpoint_id: any;
    /** (Required) The IPv4 address range, in CIDR notation, of the route destination. */
    destination_cidr_block: any;
    /** (Optional) A brief description of the route. */
    description?:           any;
    /** (Required) The ID of the Subnet to route the traffic through. It must already be attached to the Client VPN. */
    target_vpc_subnet_id:   any;
}