export interface DBParameterGroup {
    resource: Resource[];
}

export interface Resource {
    db_parameter_group: DBParameterGroupClass;
}

export interface DBParameterGroupClass {
    /** (Required) The name of the DB parameter. */
    name:          any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:  any;
    /** (Required, Forces new resource) The family of the DB parameter group. */
    family?:       any;
    /** (Optional, Forces new resource) The description of the DB parameter group. Defaults to "Managed by Terraform". */
    description?:  any;
    /** (Optional) A list of DB parameters to apply. Note that parameters may differ from a family to an other. Full list of all parameters can be discovered via [`aws rds describe-db-parameters`](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-parameters.html) after initial creation of the group. */
    parameter?:    any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
    /** (Required) The value of the DB parameter. */
    value:         any;
    /** (Optional) "immediate" (default), or "pending-reboot". Some */
    apply_method?: any;
}