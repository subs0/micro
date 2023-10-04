export interface AppmeshVirtualService {
    data: Datum[];
}

export interface Datum {
    appmesh_virtual_service: AppmeshVirtualServiceClass;
}

export interface AppmeshVirtualServiceClass {
    /** (Required) Name of the virtual service. */
    name:        any;
    /** (Required) Name of the service mesh in which the virtual service exists. */
    mesh_name:   any;
    /** (Optional) AWS account ID of the service mesh's owner. */
    mesh_owner?: any;
}