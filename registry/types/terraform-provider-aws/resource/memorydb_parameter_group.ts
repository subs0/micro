export interface MemorydbParameterGroup {
    resource: Resource[];
}

export interface Resource {
    memorydb_parameter_group: MemorydbParameterGroupClass;
}

export interface MemorydbParameterGroupClass {
    /** (Required, Forces new resource) The engine version that the parameter group can be used with. */
    family?:      any;
    /** (Required) The name of the parameter. */
    name:         any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?: any;
    /** (Optional, Forces new resource) Description for the parameter group. Defaults to `"Managed by Terraform"`. */
    description?: any;
    /** (Optional) Set of MemoryDB parameters to apply. Any parameters not specified will fall back to their family defaults. Detailed below. */
    parameter?:   any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
    /** (Required) The value of the parameter. */
    value:        any;
}