export interface Ec2ManagedPrefixList {
    resource: Resource[];
}

export interface Resource {
    ec2_managed_prefix_list: Ec2ManagedPrefixListClass;
}

export interface Ec2ManagedPrefixListClass {
    /** (Required, Forces new resource) Address family (`IPv4` or `IPv6`) of this prefix list. */
    address_family?: any;
    /** (Optional) Configuration block for prefix list entry. Detailed below. Different entries may have overlapping CIDR blocks, but a particular CIDR should not be duplicated. */
    entry?:          any;
    /** (Required) Maximum number of entries that this prefix list can contain. */
    max_entries:     any;
    /** (Required) Name of this resource. The name must not start with `com.amazonaws`. */
    name:            any;
    /** (Optional) Map of tags to assign to this resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
    /** (Required) CIDR block of this entry. */
    cidr:            any;
    /** (Optional) Description of this entry. Due to API limitations, updating only the description of an existing entry requires temporarily removing and re-adding the entry. */
    description?:    any;
}