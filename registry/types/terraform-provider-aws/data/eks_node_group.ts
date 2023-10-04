export interface EksNodeGroup {
    data: Datum[];
}

export interface Datum {
    eks_node_group: EksNodeGroupClass;
}

export interface EksNodeGroupClass {
    /** (Required) Name of the cluster. */
    cluster_name:    any;
    /** (Required) Name of the node group. */
    node_group_name: any;
}