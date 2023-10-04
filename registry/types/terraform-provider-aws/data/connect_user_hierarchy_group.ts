export interface ConnectUserHierarchyGroup {
    data: Datum[];
}

export interface Datum {
    connect_user_hierarchy_group: ConnectUserHierarchyGroupClass;
}

export interface ConnectUserHierarchyGroupClass {
    /** (Optional) Returns information on a specific hierarchy group by hierarchy group id */
    hierarchy_group_id?: any;
    /** (Required) Reference to the hosting Amazon Connect Instance */
    instance_id:         any;
    /** (Optional) Returns information on a specific hierarchy group by name */
    name?:               any;
}