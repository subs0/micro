export interface Subnet {
    resource: Resource[];
}

export interface Resource {
    subnet: SubnetClass;
}

export interface SubnetClass {
    /** (Optional) Specify true to indicate */
    assign_ipv6_address_on_creation?:                any;
    /** (Optional) AZ for the subnet. */
    availability_zone?:                              any;
    /** (Optional) AZ ID of the subnet. This argument is not supported in all regions or partitions. If necessary, use `availability_zone` instead. */
    availability_zone_id?:                           any;
    /** (Optional) The IPv4 CIDR block for the subnet. */
    cidr_block?:                                     any;
    /** (Optional) The customer owned IPv4 address pool. Typically used with the `map_customer_owned_ip_on_launch` argument. The `outpost_arn` argument must be specified when configured. */
    customer_owned_ipv4_pool?:                       any;
    /** (Optional) Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations. Default: `false`. */
    enable_dns64?:                                   any;
    /** (Optional) Indicates the device position for local network interfaces in this subnet. For example, 1 indicates local network interfaces in this subnet are the secondary network interface (eth1). A local network interface cannot be the primary network interface (eth0). */
    enable_lni_at_device_index?:                     any;
    /** (Optional) Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. Default: `false`. */
    enable_resource_name_dns_aaaa_record_on_launch?: any;
    /** (Optional) Indicates whether to respond to DNS queries for instance hostnames with DNS A records. Default: `false`. */
    enable_resource_name_dns_a_record_on_launch?:    any;
    /** (Optional) The IPv6 network range for the subnet, */
    ipv6_cidr_block?:                                any;
    /** (Optional) Indicates whether to create an IPv6-only subnet. Default: `false`. */
    ipv6_native?:                                    any;
    /**  (Optional) Specify `true` to indicate that network interfaces created in the subnet should be assigned a customer owned IP address. The `customer_owned_ipv4_pool` and `outpost_arn` arguments must be specified when set to `true`. Default is `false`. */
    map_customer_owned_ip_on_launch?:                any;
    /**  (Optional) Specify true to indicate */
    map_public_ip_on_launch?:                        any;
    /** (Optional) The Amazon Resource Name (ARN) of the Outpost. */
    outpost_arn?:                                    any;
    /** (Optional) The type of hostnames to assign to instances in the subnet at launch. For IPv6-only subnets, an instance DNS name must be based on the instance ID. For dual-stack and IPv4-only subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: `ip-name`, `resource-name`. */
    private_dns_hostname_type_on_launch?:            any;
    /** (Required) The VPC ID. */
    vpc_id:                                          any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                           any;
}