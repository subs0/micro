export interface Resourceexplorer2View {
    resource: Resource[];
}

export interface Resource {
    resourceexplorer2_view: Resourceexplorer2ViewClass;
}

export interface Resourceexplorer2ViewClass {
    /** (Optional) Specifies whether the view is the [_default view_](https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views-about.html#manage-views-about-default) for the AWS Region. Default: `false`. */
    default_view?:      any;
    /** (Optional) Specifies which resources are included in the results of queries made using this view. See [Filters](#filters) below for more details. */
    filters?:           any;
    /** (Optional) Optional fields to be included in search results from this view. See [Included Properties](#included-properties) below for more details. */
    included_property?: any;
    /** (Required) The name of the property that is included in this view. Valid values: `tags`. */
    name:               any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
    filter_any:      string;
}