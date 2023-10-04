export interface ConnectUserHierarchyStructure {
    resource: Resource[];
}

export interface Resource {
    connect_user_hierarchy_structure: ConnectUserHierarchyStructureClass;
}

export interface ConnectUserHierarchyStructureClass {
    /** (Required) A block that defines the hierarchy structure's levels. The `hierarchy_structure` block is documented below. */
    hierarchy_structure: any;
    /** (Required) Specifies the identifier of the hosting Amazon Connect Instance. */
    instance_id:         any;
    /** (Optional) A block that defines the details of level one. The level block is documented below. */
    level_one?:          any;
    /** (Optional) A block that defines the details of level two. The level block is documented below. */
    level_two?:          any;
    /** (Optional) A block that defines the details of level three. The level block is documented below. */
    level_three?:        any;
    /** (Optional) A block that defines the details of level four. The level block is documented below. */
    level_four?:         any;
    /** (Optional) A block that defines the details of level five. The level block is documented below. */
    level_five?:         any;
    /** (Required) The name of the user hierarchy level. Must not be more than 50 characters. */
    name:                any;
}