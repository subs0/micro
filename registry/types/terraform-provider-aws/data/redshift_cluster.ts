export interface RedshiftCluster {
    data: Datum[];
}

export interface Datum {
    redshift_cluster: RedshiftClusterClass;
}

export interface RedshiftClusterClass {
    /** (Required) Cluster identifier */
    cluster_identifier: any;
}