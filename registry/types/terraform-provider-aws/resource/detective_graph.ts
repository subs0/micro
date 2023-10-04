export interface DetectiveGraph {
    resource: Resource[];
}

export interface Resource {
    detective_graph: DetectiveGraphClass;
}

export interface DetectiveGraphClass {
    /**  (Optional) A map of tags to assign to the instance. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?: any;
}