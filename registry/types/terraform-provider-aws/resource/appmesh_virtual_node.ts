export interface AppmeshVirtualNode {
    resource: Resource[];
}

export interface Resource {
    appmesh_virtual_node: { [key: any]: string };
}