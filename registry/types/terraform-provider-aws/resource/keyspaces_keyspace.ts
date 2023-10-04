export interface KeyspacesKeyspace {
    resource: Resource[];
}

export interface Resource {
    keyspaces_keyspace: KeyspacesKeyspaceClass;
}

export interface KeyspacesKeyspaceClass {
    /** (Required, Forces new resource) The name of the keyspace to be created. */
    name?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?: any;
}