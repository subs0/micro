export interface OpensearchserverlessCollection {
    resource: Resource[];
}

export interface Resource {
    opensearchserverless_collection: OpensearchserverlessCollectionClass;
}

export interface OpensearchserverlessCollectionClass {
    /** (Required) Name of the collection. */
    name:         any;
    /** (Optional) Description of the collection. */
    description?: any;
    /** (Optional) A map of tags to assign to the collection. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
    /** (Optional) Type of collection. One of `SEARCH`, `TIMESERIES`, or `VECTORSEARCH`. Defaults to `TIMESERIES`. */
    type?:        any;
}