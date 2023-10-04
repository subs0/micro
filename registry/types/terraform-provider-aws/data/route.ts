export interface Route {
    data: Datum[];
}

export interface Datum {
    route: RouteClass;
}

export interface RouteClass {
    /** (Required) ID of the specific Route Table containing the Route entry. */
    route_table_id:               any;
    /** (Optional) EC2 Carrier Gateway ID of the Route belonging to the Route Table. */
    carrier_gateway_id?:          any;
    /** (Optional) Core network ARN of the Route belonging to the Route Table. */
    core_network_arn?:            any;
    /** (Optional) CIDR block of the Route belonging to the Route Table. */
    destination_cidr_block?:      any;
    /** (Optional) IPv6 CIDR block of the Route belonging to the Route Table. */
    destination_ipv6_cidr_block?: any;
    /** (Optional) ID of a [managed prefix list](ec2_managed_prefix_list.html) destination of the Route belonging to the Route Table. */
    destination_prefix_list_id?:  any;
    /** (Optional) Egress Only Gateway ID of the Route belonging to the Route Table. */
    egress_only_gateway_id?:      any;
    /** (Optional) Gateway ID of the Route belonging to the Route Table. */
    gateway_id?:                  any;
    /** (Optional) Instance ID of the Route belonging to the Route Table. */
    instance_id?:                 any;
    /** (Optional) Local Gateway ID of the Route belonging to the Route Table. */
    local_gateway_id?:            any;
    /** (Optional) NAT Gateway ID of the Route belonging to the Route Table. */
    nat_gateway_id?:              any;
    /** (Optional) Network Interface ID of the Route belonging to the Route Table. */
    network_interface_id?:        any;
    /** (Optional) EC2 Transit Gateway ID of the Route belonging to the Route Table. */
    transit_gateway_id?:          any;
    /** (Optional) VPC Peering Connection ID of the Route belonging to the Route Table. */
    vpc_peering_connection_id?:   any;
}