export interface CloudhsmV2Cluster {
    data: Datum[];
}

export interface Datum {
    cloudhsm_v2_cluster: CloudhsmV2ClusterClass;
}

export interface CloudhsmV2ClusterClass {
    /** (Required) ID of Cloud HSM v2 cluster. */
    cluster_id:     any;
    /** (Optional) State of the cluster to be found. */
    cluster_state?: any;
}