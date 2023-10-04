export interface EcsTaskDefinition {
    data: Datum[];
}

export interface Datum {
    ecs_task_definition: EcsTaskDefinitionClass;
}

export interface EcsTaskDefinitionClass {
    /** (Required) Family for the latest ACTIVE revision, family and revision (family:revision) for a specific revision in the family, the ARN of the task definition to access to. */
    task_definition: any;
}