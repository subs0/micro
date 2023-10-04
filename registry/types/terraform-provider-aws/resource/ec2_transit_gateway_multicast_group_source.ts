export interface Ec2TransitGatewayMulticastGroupSource {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway_multicast_group_source: Ec2TransitGatewayMulticastGroupSourceClass;
}

export interface Ec2TransitGatewayMulticastGroupSourceClass {
    /** (Required) The IP address assigned to the transit gateway multicast group. */
    group_ip_address:                    any;
    /** (Required) The group members' network interface ID to register with the transit gateway multicast group. */
    network_interface_id:                any;
    /** (Required) The ID of the transit gateway multicast domain. */
    transit_gateway_multicast_domain_id: any;
}