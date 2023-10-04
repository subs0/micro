export interface EcsClusterCapacityProviders {
    resource: Resource[];
}

export interface Resource {
    ecs_cluster_capacity_providers: EcsClusterCapacityProvidersClass;
}

export interface EcsClusterCapacityProvidersClass {
    /** (Optional) Set of names of one or more capacity providers to associate with the cluster. Valid values also include `FARGATE` and `FARGATE_SPOT`. */
    capacity_providers?:                 any;
    /** (Required, Forces new resource) Name of the ECS cluster to manage capacity providers for. */
    cluster_name?:                       any;
    /** (Optional) Set of capacity provider strategies to use by default for the cluster. Detailed below. */
    default_capacity_provider_strategy?: any;
    /** (Required) Name of the capacity provider. */
    capacity_provider:                   any;
    /** (Optional) The relative percentage of the total number of launched tasks that should use the specified capacity provider. The `weight` value is taken into consideration after the `base` count of tasks has been satisfied. Defaults to `0`. */
    weight?:                             any;
    /** (Optional) The number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. Defaults to `0`. */
    base?:                               any;
}