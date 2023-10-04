export interface EksCluster {
    data: Datum[];
}

export interface Datum {
    eks_cluster: EksClusterClass;
}

export interface EksClusterClass {
    /** (Required) Name of the cluster. Must be between 1-100 characters in length. Must begin with an alphanumeric character, and must only contain alphanumeric characters, dashes and underscores (`^[0-9A-Za-z][A-Za-z0-9\-_]+$`). */
    name: any;
}