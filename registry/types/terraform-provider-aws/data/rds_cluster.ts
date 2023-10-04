export interface RDSCluster {
    data: Datum[];
}

export interface Datum {
    rds_cluster: RDSClusterClass;
}

export interface RDSClusterClass {
    /** (Required) Cluster identifier of the RDS cluster. */
    cluster_identifier: any;
}