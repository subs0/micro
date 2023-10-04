export interface NatGateway {
    resource: Resource[];
}

export interface Resource {
    nat_gateway: NatGatewayClass;
}

export interface NatGatewayClass {
    /** (Optional) The Allocation ID of the Elastic IP address for the NAT Gateway. Required for `connectivity_type` of `public`. */
    allocation_id?:                      any;
    /** (Optional) Connectivity type for the NAT Gateway. Valid values are `private` and `public`. Defaults to `public`. */
    connectivity_type?:                  any;
    /** (Optional) The private IPv4 address to assign to the NAT Gateway. If you don't provide an address, a private IPv4 address will be automatically assigned. */
    private_ip?:                         any;
    /** (Required) The Subnet ID of the subnet in which to place the NAT Gateway. */
    subnet_id:                           any;
    /** (Optional) A list of secondary allocation EIP IDs for this NAT Gateway. */
    secondary_allocation_ids?:           any;
    /** (Optional) [Private NAT Gateway only] The number of secondary private IPv4 addresses you want to assign to the NAT Gateway. */
    secondary_private_ip_address_count?: any;
    /** (Optional) A list of secondary private IPv4 addresses to assign to the NAT Gateway. */
    secondary_private_ip_addresses?:     any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                               any;
}