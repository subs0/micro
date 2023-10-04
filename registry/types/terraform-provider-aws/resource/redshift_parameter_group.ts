export interface RedshiftParameterGroup {
    resource: Resource[];
}

export interface Resource {
    redshift_parameter_group: RedshiftParameterGroupClass;
}

export interface RedshiftParameterGroupClass {
    /** (Required) The name of the Redshift parameter. */
    name:         any;
    /** (Required) The family of the Redshift parameter group. */
    family:       any;
    /** (Optional) The description of the Redshift parameter group. Defaults to "Managed by Terraform". */
    description?: any;
    /** (Optional) A list of Redshift parameters to apply. */
    parameter?:   any;
    /** (Required) The value of the Redshift parameter. */
    value:        any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}