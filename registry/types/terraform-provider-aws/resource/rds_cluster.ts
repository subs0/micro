export interface RDSCluster {
    resource: Resource[];
}

export interface Resource {
    rds_cluster: { [key: any]: string };
}