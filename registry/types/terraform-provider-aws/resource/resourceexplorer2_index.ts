export interface Resourceexplorer2Index {
    resource: Resource[];
}

export interface Resource {
    resourceexplorer2_index: Resourceexplorer2IndexClass;
}

export interface Resourceexplorer2IndexClass {
    /** (Required) The type of the index. Valid values: `AGGREGATOR`, `LOCAL`. To understand the difference between `LOCAL` and `AGGREGATOR`, see the [_AWS Resource Explorer User Guide_](https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html). */
    type:  any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?: any;
}