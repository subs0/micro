export interface RouteTable {
    resource: Resource[];
}

export interface Resource {
    route_table: RouteTableClass;
}

export interface RouteTableClass {
    /** (Required) The VPC ID. */
    vpc_id:                      any;
    /** (Optional) A list of route objects. Their keys are documented below. This argument is processed in [attribute-as-blocks mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html). */
    route?:                      any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                       any;
    /** (Optional) A list of virtual gateways for propagation. */
    propagating_vgws?:           any;
    /** (Required) The CIDR block of the route. */
    cidr_block:                  any;
    /** (Optional) The Ipv6 CIDR block of the route. */
    ipv6_cidr_block?:            any;
    /** (Optional) The ID of a [managed prefix list](ec2_managed_prefix_list.html) destination of the route. */
    destination_prefix_list_id?: any;
    /** (Optional) Identifier of a carrier gateway. This attribute can only be used when the VPC contains a subnet which is associated with a Wavelength Zone. */
    carrier_gateway_id?:         any;
    /** (Optional) The Amazon Resource Name (ARN) of a core network. */
    core_network_arn?:           any;
    /** (Optional) Identifier of a VPC Egress Only Internet Gateway. */
    egress_only_gateway_id?:     any;
    /** (Optional) Identifier of a VPC internet gateway, virtual private gateway, or `local`. `local` routes cannot be created but can be adopted or imported. See the [example](#adopting-an-existing-local-route) above. */
    gateway_id?:                 any;
    /** (Optional) Identifier of a Outpost local gateway. */
    local_gateway_id?:           any;
    /** (Optional) Identifier of a VPC NAT gateway. */
    nat_gateway_id?:             any;
    /** (Optional) Identifier of an EC2 network interface. */
    network_interface_id?:       any;
    /** (Optional) Identifier of an EC2 Transit Gateway. */
    transit_gateway_id?:         any;
    /** (Optional) Identifier of a VPC Endpoint. */
    vpc_endpoint_id?:            any;
    /** (Optional) Identifier of a VPC peering connection. */
    vpc_peering_connection_id?:  any;
}