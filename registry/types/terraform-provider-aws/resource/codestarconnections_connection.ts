export interface CodestarconnectionsConnection {
    resource: Resource[];
}

export interface Resource {
    codestarconnections_connection: CodestarconnectionsConnectionClass;
}

export interface CodestarconnectionsConnectionClass {
    /** (Required) The name of the connection to be created. The name must be unique in the calling AWS account. Changing `name` will create a new resource. */
    name:           any;
    /** (Optional) The name of the external provider where your third-party code repository is configured. Valid values are `Bitbucket`, `GitHub` or `GitHubEnterpriseServer`. Changing `provider_type` will create a new resource. Conflicts with `host_arn` */
    provider_type?: any;
    /** (Optional) The Amazon Resource Name (ARN) of the host associated with the connection. Conflicts with `provider_type` */
    host_arn?:      any;
    /** (Optional) Map of key-value resource tags to associate with the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:          any;
}