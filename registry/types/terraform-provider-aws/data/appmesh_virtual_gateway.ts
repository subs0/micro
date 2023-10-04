export interface AppmeshVirtualGateway {
    data: Datum[];
}

export interface Datum {
    appmesh_virtual_gateway: AppmeshVirtualGatewayClass;
}

export interface AppmeshVirtualGatewayClass {
    /** (Required) Name of the virtual gateway. */
    name:        any;
    /** (Required) Name of the service mesh in which the virtual gateway exists. */
    mesh_name:   any;
    /** (Optional) AWS account ID of the service mesh's owner. */
    mesh_owner?: any;
}