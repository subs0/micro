export interface EksClusterAuth {
    data: Datum[];
}

export interface Datum {
    eks_cluster_auth: EksClusterAuthClass;
}

export interface EksClusterAuthClass {
    /** (Required) Name of the cluster */
    name: any;
}