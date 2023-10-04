export interface MemorydbCluster {
    data: Datum[];
}

export interface Datum {
    memorydb_cluster: MemorydbClusterClass;
}

export interface MemorydbClusterClass {
    /** (Required) Name of the cluster. */
    name: any;
}