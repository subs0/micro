export interface EcsTag {
    resource: Resource[];
}

export interface Resource {
    ecs_tag: EcsTagClass;
}

export interface EcsTagClass {
    /** (Required) Amazon Resource Name (ARN) of the ECS resource to tag. */
    resource_arn: any;
    /** (Required) Tag name. */
    key:          any;
    /** (Required) Tag value. */
    value:        any;
}