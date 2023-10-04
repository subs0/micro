export interface ApprunnerConnection {
    resource: Resource[];
}

export interface Resource {
    apprunner_connection: ApprunnerConnectionClass;
}

export interface ApprunnerConnectionClass {
    /** (Required) Name of the connection. */
    connection_name: any;
    /** (Required) Source repository provider. Valid values: `GITHUB`. */
    provider_type:   any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
}