export interface EcsService {
    data: Datum[];
}

export interface Datum {
    ecs_service: EcsServiceClass;
}

export interface EcsServiceClass {
    /** (Required) Name of the ECS Service */
    service_name: any;
    /** (Required) ARN of the ECS Cluster */
    cluster_arn:  any;
}