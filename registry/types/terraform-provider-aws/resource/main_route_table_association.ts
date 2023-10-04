export interface MainRouteTableAssociation {
    resource: Resource[];
}

export interface Resource {
    main_route_table_association: MainRouteTableAssociationClass;
}

export interface MainRouteTableAssociationClass {
    /** (Required) The ID of the VPC whose main route table should be set */
    vpc_id:         any;
    /** (Required) The ID of the Route Table to set as the new */
    route_table_id: any;
}