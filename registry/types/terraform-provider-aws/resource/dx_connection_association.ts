export interface DxConnectionAssociation {
    resource: Resource[];
}

export interface Resource {
    dx_connection_association: DxConnectionAssociationClass;
}

export interface DxConnectionAssociationClass {
    /** (Required) The ID of the connection. */
    connection_id: any;
    /** (Required) The ID of the LAG with which to associate the connection. */
    lag_id:        any;
}