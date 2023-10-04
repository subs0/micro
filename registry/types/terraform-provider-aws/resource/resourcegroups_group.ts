export interface ResourcegroupsGroup {
    resource: Resource[];
}

export interface Resource {
    resourcegroups_group: ResourcegroupsGroupClass;
}

export interface ResourcegroupsGroupClass {
    /** (Required) The name of the group configuration parameter. */
    name:           any;
    /** (Optional) A configuration associates the resource group with an AWS service and specifies how the service can interact with the resources in the group. See below for details. */
    configuration?: any;
    /** (Optional) A description of the resource group. */
    description?:   any;
    /** (Required) A `resource_query` block. Resource queries are documented below. */
    resource_query: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:          any;
    /** (Required) The resource query as a JSON string. */
    query:          any;
    /** (Required) Specifies the type of group configuration item. */
    type:           any;
    /** (Optional) A collection of parameters for this group configuration item. See below for details. */
    parameters?:    any;
    /** (Optional) The value or values to be used for the specified parameter. */
    values?:        any;
}