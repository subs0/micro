export interface NeptuneClusterParameterGroup {
    resource: Resource[];
}

export interface Resource {
    neptune_cluster_parameter_group: NeptuneClusterParameterGroupClass;
}

export interface NeptuneClusterParameterGroupClass {
    /** (Required) The name of the neptune parameter. */
    name:          any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:  any;
    /** (Required) The family of the neptune cluster parameter group. */
    family:        any;
    /** (Optional) The description of the neptune cluster parameter group. Defaults to "Managed by Terraform". */
    description?:  any;
    /** (Optional) A list of neptune parameters to apply. */
    parameter?:    any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
    /** (Required) The value of the neptune parameter. */
    value:         any;
    /** (Optional) Valid values are `immediate` and `pending-reboot`. Defaults to `pending-reboot`. */
    apply_method?: any;
}