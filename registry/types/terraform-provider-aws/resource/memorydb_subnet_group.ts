export interface MemorydbSubnetGroup {
    resource: Resource[];
}

export interface Resource {
    memorydb_subnet_group: MemorydbSubnetGroupClass;
}

export interface MemorydbSubnetGroupClass {
    /** (Required) Set of VPC Subnet ID-s for the subnet group. At least one subnet must be provided. */
    subnet_ids:   any;
    /** (Optional, Forces new resource) Name of the subnet group. If omitted, Terraform will assign a random, unique name. Conflicts with `name_prefix`. */
    name?:        any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?: any;
    /** (Optional) Description for the subnet group. Defaults to `"Managed by Terraform"`. */
    description?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}