export interface AppmeshVirtualRouter {
    data: Datum[];
}

export interface Datum {
    appmesh_virtual_router: AppmeshVirtualRouterClass;
}

export interface AppmeshVirtualRouterClass {
    /** (Required) Name of the virtual router. */
    name:      any;
    /** (Required) Name of the mesh in which the virtual router exists */
    mesh_name: any;
}