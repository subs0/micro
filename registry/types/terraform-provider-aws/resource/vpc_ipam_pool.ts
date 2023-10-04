export interface VpcIPAMPool {
    resource: Resource[];
}

export interface Resource {
    vpc_ipam_pool: VpcIPAMPoolClass;
}

export interface VpcIPAMPoolClass {
    /** (Optional) The IP protocol assigned to this pool. You must choose either IPv4 or IPv6 protocol for a pool. */
    address_family?:                    any;
    /** (Optional) A default netmask length for allocations added to this pool. If, for example, the CIDR assigned to this pool is 10.0.0.0/8 and you enter 16 here, new allocations will default to 10.0.0.0/16 (unless you provide a different netmask value when you create the new allocation). */
    allocation_default_netmask_length?: any;
    /** (Optional) The maximum netmask length that will be required for CIDR allocations in this pool. */
    allocation_max_netmask_length?:     any;
    /** (Optional) The minimum netmask length that will be required for CIDR allocations in this pool. */
    allocation_min_netmask_length?:     any;
    /** (Optional) Tags that are required for resources that use CIDRs from this IPAM pool. Resources that do not have these tags will not be allowed to allocate space from the pool. If the resources have their tags changed after they have allocated space or if the allocation tagging requirements are changed on the pool, the resource may be marked as noncompliant. */
    allocation_resource_tags?:          any;
    /** (Optional) If you include this argument, IPAM automatically imports any VPCs you have in your scope that fall */
    auto_import?:                       any;
    /** (Optional) Limits which AWS service the pool can be used in. Only useable on public scopes. Valid Values: `ec2`. */
    aws_service?:                       any;
    /** (Optional) A description for the IPAM pool. */
    description?:                       any;
    /** (Optional) The ID of the scope in which you would like to create the IPAM pool. */
    ipam_scope_id?:                     any;
    /** (Optional) The locale in which you would like to create the IPAM pool. Locale is the Region where you want to make an IPAM pool available for allocations. You can only create pools with locales that match the operating Regions of the IPAM. You can only create VPCs from a pool whose locale matches the VPC's Region. Possible values: Any AWS region, such as `us-east-1`. */
    locale?:                            any;
    /** (Optional) Defines whether or not IPv6 pool space is publicly advertisable over the internet. This argument is required if `address_family = "ipv6"` and `public_ip_source = "byoip"`, default is `false`. This option is not available for IPv4 pool space or if `public_ip_source = "amazon"`. */
    publicly_advertisable?:             any;
    /** (Optional) The IP address source for pools in the public scope. Only used for provisioning IP address CIDRs to pools in the public scope. Valid values are `byoip` or `amazon`. Default is `byoip`. */
    public_ip_source?:                  any;
    /** (Optional) The ID of the source IPAM pool. Use this argument to create a child pool within an existing pool. */
    source_ipam_pool_id?:               any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                              any;
}