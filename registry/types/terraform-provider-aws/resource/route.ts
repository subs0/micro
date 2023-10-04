export interface Route {
    resource: Resource[];
}

export interface Resource {
    route: RouteClass;
}

export interface RouteClass {
    /** (Required) The ID of the routing table. */
    route_table_id:               any;
    /** (Optional) The destination CIDR block. */
    destination_cidr_block?:      any;
    /** (Optional) The destination IPv6 CIDR block. */
    destination_ipv6_cidr_block?: any;
    /** (Optional) The ID of a [managed prefix list](ec2_managed_prefix_list.html) destination. */
    destination_prefix_list_id?:  any;
    /** (Optional) Identifier of a carrier gateway. This attribute can only be used when the VPC contains a subnet which is associated with a Wavelength Zone. */
    carrier_gateway_id?:          any;
    /** (Optional) The Amazon Resource Name (ARN) of a core network. */
    core_network_arn?:            any;
    /** (Optional) Identifier of a VPC Egress Only Internet Gateway. */
    egress_only_gateway_id?:      any;
    /** (Optional) Identifier of a VPC internet gateway or a virtual private gateway. Specify `local` when updating a previously [imported](#import) local route. */
    gateway_id?:                  any;
    /** (Optional) Identifier of a VPC NAT gateway. */
    nat_gateway_id?:              any;
    /** (Optional) Identifier of a Outpost local gateway. */
    local_gateway_id?:            any;
    /** (Optional) Identifier of an EC2 network interface. */
    network_interface_id?:        any;
    /** (Optional) Identifier of an EC2 Transit Gateway. */
    transit_gateway_id?:          any;
    /** (Optional) Identifier of a VPC Endpoint. */
    vpc_endpoint_id?:             any;
    /** (Optional) Identifier of a VPC peering connection. */
    vpc_peering_connection_id?:   any;
}