export interface EmrcontainersVirtualCluster {
    data: Datum[];
}

export interface Datum {
    emrcontainers_virtual_cluster: EmrcontainersVirtualClusterClass;
}

export interface EmrcontainersVirtualClusterClass {
    /** (Required) ID of the cluster. */
    virtual_cluster_id: any;
}