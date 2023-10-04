export interface ConnectUserHierarchyGroup {
    resource: Resource[];
}

export interface Resource {
    connect_user_hierarchy_group: ConnectUserHierarchyGroupClass;
}

export interface ConnectUserHierarchyGroupClass {
    /** (Required) Specifies the identifier of the hosting Amazon Connect Instance. */
    instance_id:      any;
    /** (Required) The name of the user hierarchy group. Must not be more than 100 characters. */
    name:             any;
    /** (Optional) The identifier for the parent hierarchy group. The user hierarchy is created at level one if the parent group ID is null. */
    parent_group_id?: any;
    /** (Optional) Tags to apply to the hierarchy group. If configured with a provider */
    tags?:            any;
}