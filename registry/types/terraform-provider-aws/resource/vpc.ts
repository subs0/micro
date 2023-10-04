export interface Vpc {
    resource: Resource[];
}

export interface Resource {
    vpc: VpcClass;
}

export interface VpcClass {
    /** (Optional) The IPv4 CIDR block for the VPC. CIDR can be explicitly set or it can be derived from IPAM using `ipv4_netmask_length`. */
    cidr_block?:                           any;
    /** (Optional) A tenancy option for instances launched into the VPC. Default is `default`, which ensures that EC2 instances launched in this VPC use the EC2 instance tenancy attribute specified when the EC2 instance is launched. The only other option is `dedicated`, which ensures that EC2 instances launched in this VPC are run on dedicated tenancy instances regardless of the tenancy attribute specified at launch. This has a dedicated per region fee of $2 per hour, plus an hourly per instance usage fee. */
    instance_tenancy?:                     any;
    /** (Optional) The ID of an IPv4 IPAM pool you want to use for allocating this VPC's CIDR. IPAM is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across AWS Regions and accounts. Using IPAM you can monitor IP address usage throughout your AWS Organization. */
    ipv4_ipam_pool_id?:                    any;
    /** (Optional) The netmask length of the IPv4 CIDR you want to allocate to this VPC. Requires specifying a `ipv4_ipam_pool_id`. */
    ipv4_netmask_length?:                  any;
    /** (Optional) IPv6 CIDR block to request from an IPAM Pool. Can be set explicitly or derived from IPAM using `ipv6_netmask_length`. */
    ipv6_cidr_block?:                      any;
    /** (Optional) IPAM Pool ID for a IPv6 pool. Conflicts with `assign_generated_ipv6_cidr_block`. */
    ipv6_ipam_pool_id?:                    any;
    /** (Optional) Netmask length to request from IPAM Pool. Conflicts with `ipv6_cidr_block`. This can be omitted if IPAM pool as a `allocation_default_netmask_length` set. Valid values: `56`. */
    ipv6_netmask_length?:                  any;
    /** (Optional) By default when an IPv6 CIDR is assigned to a VPC a default ipv6_cidr_block_network_border_group will be set to the region of the VPC. This can be changed to restrict advertisement of public addresses to specific Network Border Groups such as LocalZones. */
    ipv6_cidr_block_network_border_group?: any;
    /** (Optional) A boolean flag to enable/disable DNS support in the VPC. Defaults to true. */
    enable_dns_support?:                   any;
    /** (Optional) Indicates whether Network Address Usage metrics are enabled for your VPC. Defaults to false. */
    enable_network_address_usage_metrics?: any;
    /** (Optional) A boolean flag to enable/disable DNS hostnames in the VPC. Defaults false. */
    enable_dns_hostnames?:                 any;
    /** (Optional) Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. You cannot specify the range of IP addresses, or the size of the CIDR block. Default is `false`. Conflicts with `ipv6_ipam_pool_id` */
    assign_generated_ipv6_cidr_block?:     any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                 any;
}