export interface AppmeshMesh {
    data: Datum[];
}

export interface Datum {
    appmesh_mesh: AppmeshMeshClass;
}

export interface AppmeshMeshClass {
    /** (Required) Name of the service mesh. */
    name:        any;
    /** (Optional) AWS account ID of the service mesh's owner. */
    mesh_owner?: any;
}