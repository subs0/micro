export interface VpcIpv4CIDRBlockAssociation {
    resource: Resource[];
}

export interface Resource {
    vpc_ipv4_cidr_block_association: VpcIpv4CIDRBlockAssociationClass;
}

export interface VpcIpv4CIDRBlockAssociationClass {
    /** (Optional) The IPv4 CIDR block for the VPC. CIDR can be explicitly set or it can be derived from IPAM using `ipv4_netmask_length`. */
    cidr_block?:          any;
    /** (Optional) The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across AWS Regions and accounts. Using IPAM you can monitor IP address usage throughout your AWS Organization. */
    ipv4_ipam_pool_id?:   any;
    /** (Optional) The netmask length of the IPv4 CIDR you want to allocate to this VPC. Requires specifying a `ipv4_ipam_pool_id`. */
    ipv4_netmask_length?: any;
    /** (Required) The ID of the VPC to make the association with. */
    vpc_id:               any;
}