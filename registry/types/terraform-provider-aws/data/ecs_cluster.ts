export interface EcsCluster {
    data: Datum[];
}

export interface Datum {
    ecs_cluster: EcsClusterClass;
}

export interface EcsClusterClass {
    /** (Required) Name of the ECS Cluster */
    cluster_name: any;
}