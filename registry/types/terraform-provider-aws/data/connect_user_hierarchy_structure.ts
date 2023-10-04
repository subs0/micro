export interface ConnectUserHierarchyStructure {
    data: Datum[];
}

export interface Datum {
    connect_user_hierarchy_structure: ConnectUserHierarchyStructureClass;
}

export interface ConnectUserHierarchyStructureClass {
    /** (Required) Reference to the hosting Amazon Connect Instance */
    instance_id: any;
}