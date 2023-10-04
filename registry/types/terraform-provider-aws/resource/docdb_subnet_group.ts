export interface DocdbSubnetGroup {
    resource: Resource[];
}

export interface Resource {
    docdb_subnet_group: DocdbSubnetGroupClass;
}

export interface DocdbSubnetGroupClass {
    /** (Optional, Forces new resource) The name of the docDB subnet group. If omitted, Terraform will assign a random, unique name. */
    name?:        any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?: any;
    /** (Optional) The description of the docDB subnet group. Defaults to "Managed by Terraform". */
    description?: any;
    /** (Required) A list of VPC subnet IDs. */
    subnet_ids:   any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}