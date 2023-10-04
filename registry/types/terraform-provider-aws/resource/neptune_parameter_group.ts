export interface NeptuneParameterGroup {
    resource: Resource[];
}

export interface Resource {
    neptune_parameter_group: NeptuneParameterGroupClass;
}

export interface NeptuneParameterGroupClass {
    /** (Required, Forces new resource) The name of the Neptune parameter group. */
    name?:         any;
    /** (Required) The family of the Neptune parameter group. */
    family:        any;
    /** (Optional) The description of the Neptune parameter group. Defaults to "Managed by Terraform". */
    description?:  any;
    /** (Optional) A list of Neptune parameters to apply. */
    parameter?:    any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
    /** (Required) The value of the Neptune parameter. */
    value:         any;
    /** (Optional) The apply method of the Neptune parameter. Valid values are `immediate` and `pending-reboot`. Defaults to `pending-reboot`. */
    apply_method?: any;
}