export interface EksNodeGroups {
    data: Datum[];
}

export interface Datum {
    eks_node_groups: EksNodeGroupsClass;
}

export interface EksNodeGroupsClass {
    /** (Required) Name of the cluster. */
    cluster_name: any;
}