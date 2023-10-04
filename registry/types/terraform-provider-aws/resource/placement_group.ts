export interface PlacementGroup {
    resource: Resource[];
}

export interface Resource {
    placement_group: PlacementGroupClass;
}

export interface PlacementGroupClass {
    /** (Required) The name of the placement group. */
    name:             any;
    /** (Optional) The number of partitions to create in the */
    partition_count?: any;
    /** (Optional) Determines how placement groups spread instances. Can only be used */
    spread_level?:    any;
    /** (Required) The placement strategy. Can be `cluster`, `partition` or `spread`. */
    strategy:         any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:            any;
}