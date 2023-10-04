export interface AppmeshVirtualNode {
    data: Datum[];
}

export interface Datum {
    appmesh_virtual_node: AppmeshVirtualNodeClass;
}

export interface AppmeshVirtualNodeClass {
    /** (Required) Name of the virtual node. */
    name:        any;
    /** (Required) Name of the service mesh in which the virtual node exists. */
    mesh_name:   any;
    /** (Optional) AWS account ID of the service mesh's owner. */
    mesh_owner?: any;
}