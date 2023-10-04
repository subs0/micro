export interface FinspaceKxDatabase {
    resource: Resource[];
}

export interface Resource {
    finspace_kx_database: FinspaceKxDatabaseClass;
}

export interface FinspaceKxDatabaseClass {
    /** (Required) Unique identifier for the KX environment. */
    environment_id: any;
    /** (Required) Name of the KX database. */
    name:           any;
    /** (Optional) Description of the KX database. */
    description?:   any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:          any;
}