export interface VpcIpv6CIDRBlockAssociation {
    resource: Resource[];
}

export interface Resource {
    vpc_ipv6_cidr_block_association: VpcIpv6CIDRBlockAssociationClass;
}

export interface VpcIpv6CIDRBlockAssociationClass {
    /** (Optional) The IPv6 CIDR block for the VPC. CIDR can be explicitly set or it can be derived from IPAM using `ipv6_netmask_length`. This parameter is required if `ipv6_netmask_length` is not set and he IPAM pool does not have `allocation_default_netmask` set. */
    ipv6_cidr_block?:     any;
    /** (Required) The ID of an IPv6 IPAM pool you want to use for allocating this VPC's CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across AWS Regions and accounts. */
    ipv6_ipam_pool_id:    any;
    /** (Optional) The netmask length of the IPv6 CIDR you want to allocate to this VPC. Requires specifying a `ipv6_ipam_pool_id`. This parameter is optional if the IPAM pool has `allocation_default_netmask` set, otherwise it or `cidr_block` are required */
    ipv6_netmask_length?: any;
    /** (Required) The ID of the VPC to make the association with. */
    vpc_id:               any;
}