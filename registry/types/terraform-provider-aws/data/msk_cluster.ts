export interface MskCluster {
    data: Datum[];
}

export interface Datum {
    msk_cluster: MskClusterClass;
}

export interface MskClusterClass {
    /** (Required) Name of the cluster. */
    cluster_name: any;
}