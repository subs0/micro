export interface RouteTableAssociation {
    resource: Resource[];
}

export interface Resource {
    route_table_association: RouteTableAssociationClass;
}

export interface RouteTableAssociationClass {
    /** (Optional) The subnet ID to create an association. Conflicts with `gateway_id`. */
    subnet_id?:     any;
    /** (Optional) The gateway ID to create an association. Conflicts with `subnet_id`. */
    gateway_id?:    any;
    /** (Required) The ID of the routing table to associate with. */
    route_table_id: any;
}