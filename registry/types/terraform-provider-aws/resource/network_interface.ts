export interface NetworkInterface {
    resource: Resource[];
}

export interface Resource {
    network_interface: NetworkInterfaceClass;
}

export interface NetworkInterfaceClass {
    /** (Required) Subnet ID to create the ENI in. */
    subnet_id:                  any;
    /** (Optional) Configuration block to define the attachment of the ENI. See [Attachment](#attachment) below for more details! */
    attachment?:                any;
    /** (Optional) Description for the network interface. */
    description?:               any;
    /** (Optional) Type of network interface to create. Set to `efa` for Elastic Fabric Adapter. Changing `interface_type` will cause the resource to be destroyed and re-created. */
    interface_type?:            any;
    /** (Optional) Number of IPv4 prefixes that AWS automatically assigns to the network interface. */
    ipv4_prefix_count?:         any;
    /** (Optional) One or more IPv4 prefixes assigned to the network interface. */
    ipv4_prefixes?:             any;
    /** (Optional) Number of IPv6 addresses to assign to a network interface. You can't use this option if specifying specific `ipv6_addresses`. If your subnet has the AssignIpv6AddressOnCreation attribute set to `true`, you can specify `0` to override this setting. */
    ipv6_address_count?:        any;
    /** (Optional) Whether `ipv6_address_list` is allowed and controls the IPs to assign to the ENI and `ipv6_addresses` and `ipv6_address_count` become read-only. Default false. */
    ipv6_address_list_enabled?: any;
    /** (Optional) List of private IPs to assign to the ENI in sequential order. */
    ipv6_address_list?:         any;
    /** (Optional) One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. Addresses are assigned without regard to order. You can't use this option if you're specifying `ipv6_address_count`. */
    ipv6_addresses?:            any;
    /** (Optional) Number of IPv6 prefixes that AWS automatically assigns to the network interface. */
    ipv6_prefix_count?:         any;
    /** (Optional) One or more IPv6 prefixes assigned to the network interface. */
    ipv6_prefixes?:             any;
    /** (Optional) List of private IPs to assign to the ENI in sequential order. Requires setting `private_ip_list_enabled` to `true`. */
    private_ip_list?:           any;
    /** (Optional) Whether `private_ip_list` is allowed and controls the IPs to assign to the ENI and `private_ips` and `private_ips_count` become read-only. Default false. */
    private_ip_list_enabled?:   any;
    /** (Optional) List of private IPs to assign to the ENI without regard to order. */
    private_ips?:               any;
    /** (Optional) Number of secondary private IPs to assign to the ENI. The total number of private IPs will be 1 + `private_ips_count`, as a primary private IP will be assiged to an ENI by default. */
    private_ips_count?:         any;
    /** (Optional) List of security group IDs to assign to the ENI. */
    security_groups?:           any;
    /** (Optional) Whether to enable source destination checking for the ENI. Default true. */
    source_dest_check?:         any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
    /** (Required) ID of the instance to attach to. */
    instance:                   any;
    /** (Required) Integer to define the devices index. */
    device_index:               any;
}