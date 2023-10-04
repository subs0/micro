export interface ElasticacheParameterGroup {
    resource: Resource[];
}

export interface Resource {
    elasticache_parameter_group: ElasticacheParameterGroupClass;
}

export interface ElasticacheParameterGroupClass {
    /** (Required) The name of the ElastiCache parameter. */
    name:         any;
    /** (Required) The family of the ElastiCache parameter group. */
    family:       any;
    /** (Optional) The description of the ElastiCache parameter group. Defaults to "Managed by Terraform". */
    description?: any;
    /** (Optional) A list of ElastiCache parameters to apply. */
    parameter?:   any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
    /** (Required) The value of the ElastiCache parameter. */
    value:        any;
}