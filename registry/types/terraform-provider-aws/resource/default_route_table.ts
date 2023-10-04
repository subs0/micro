export interface DefaultRouteTable {
    resource: Resource[];
}

export interface Resource {
    default_route_table: DefaultRouteTableClass;
}

export interface DefaultRouteTableClass {
    /** (Required) ID of the default route table. */
    default_route_table_id: any;
    /** (Optional) List of virtual gateways for propagation. */
    propagating_vgws?:      any;
    route?:                 Route;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
}

export interface Route {
    /** (Required) The CIDR block of the route. */
    cidr_block:                 any;
    /** (Optional) The Ipv6 CIDR block of the route */
    ipv6_cidr_block:            any;
    /** (Optional) The ID of a [managed prefix list](ec2_managed_prefix_list.html) destination of the route. */
    destination_prefix_list_id: any;
    /** (Optional) The Amazon Resource Name (ARN) of a core network. */
    core_network_arn:           any;
    /** (Optional) Identifier of a VPC Egress Only Internet Gateway. */
    egress_only_gateway_id:     any;
    /** (Optional) Identifier of a VPC internet gateway or a virtual private gateway. */
    gateway_id:                 any;
    /** (Optional) Identifier of an EC2 instance. */
    instance_id:                any;
    /** (Optional) Identifier of a VPC NAT gateway. */
    nat_gateway_id:             any;
    /** (Optional) Identifier of an EC2 network interface. */
    network_interface_id:       any;
    /** (Optional) Identifier of an EC2 Transit Gateway. */
    transit_gateway_id:         any;
    /** (Optional) Identifier of a VPC Endpoint. This route must be removed prior to VPC Endpoint deletion. */
    vpc_endpoint_id:            any;
    /** (Optional) Identifier of a VPC peering connection. */
    vpc_peering_connection_id:  any;
}