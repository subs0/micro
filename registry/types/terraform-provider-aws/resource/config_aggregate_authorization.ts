export interface ConfigAggregateAuthorization {
    resource: Resource[];
}

export interface Resource {
    config_aggregate_authorization: ConfigAggregateAuthorizationClass;
}

export interface ConfigAggregateAuthorizationClass {
    /** (Required) Account ID */
    account_id: any;
    /** (Required) Region */
    region:     any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:      any;
}