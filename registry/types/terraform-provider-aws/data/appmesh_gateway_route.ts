export interface AppmeshGatewayRoute {
    data: Datum[];
}

export interface Datum {
    appmesh_gateway_route: AppmeshGatewayRouteClass;
}

export interface AppmeshGatewayRouteClass {
    /** (Required) Name of the gateway route. */
    name:                 any;
    /** (Required) Name of the service mesh in which the virtual gateway exists. */
    mesh_name:            any;
    /** (Required) Name of the virtual gateway in which the route exists. */
    virtual_gateway_name: any;
    /** (Optional) AWS account ID of the service mesh's owner. */
    mesh_owner?:          any;
}