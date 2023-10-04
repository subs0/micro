export interface AppmeshRoute {
    data: Datum[];
}

export interface Datum {
    appmesh_route: AppmeshRouteClass;
}

export interface AppmeshRouteClass {
    /** (Required) Name of the route. */
    name:                any;
    /** (Required) Name of the service mesh in which the virtual router exists. */
    mesh_name:           any;
    /** (Required) Name of the virtual router in which the route exists. */
    virtual_router_name: any;
    /** (Optional) AWS account ID of the service mesh's owner. */
    mesh_owner?:         any;
}