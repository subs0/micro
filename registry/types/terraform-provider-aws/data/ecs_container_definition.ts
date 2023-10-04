export interface EcsContainerDefinition {
    data: Datum[];
}

export interface Datum {
    ecs_container_definition: EcsContainerDefinitionClass;
}

export interface EcsContainerDefinitionClass {
    /** (Required) ARN of the task definition which contains the container */
    task_definition: any;
    /** (Required) Name of the container definition */
    container_name:  any;
}