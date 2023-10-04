export interface DocdbClusterParameterGroup {
    resource: Resource[];
}

export interface Resource {
    docdb_cluster_parameter_group: DocdbClusterParameterGroupClass;
}

export interface DocdbClusterParameterGroupClass {
    /** (Required) The name of the DocumentDB parameter. */
    name:          any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:  any;
    /** (Required, Forces new resource) The family of the DocumentDB cluster parameter group. */
    family?:       any;
    /** (Optional, Forces new resource) The description of the DocumentDB cluster parameter group. Defaults to "Managed by Terraform". */
    description?:  any;
    /** (Optional) A list of DocumentDB parameters to apply. Setting parameters to system default values may show a difference on imported resources. */
    parameter?:    any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
    /** (Required) The value of the DocumentDB parameter. */
    value:         any;
    /** (Optional) Valid values are `immediate` and `pending-reboot`. Defaults to `pending-reboot`. */
    apply_method?: any;
}