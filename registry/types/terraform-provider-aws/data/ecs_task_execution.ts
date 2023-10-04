export interface EcsTaskExecution {
    data: Datum[];
}

export interface Datum {
    ecs_task_execution: EcsTaskExecutionClass;
}

export interface EcsTaskExecutionClass {
    /** (Required) Short name or full Amazon Resource Name (ARN) of the cluster to run the task on. */
    cluster:                          any;
    /** (Required) The `family` and `revision` (`family:revision`) or full ARN of the task definition to run. If a revision isn't specified, the latest `ACTIVE` revision is used. */
    task_definition:                  any;
    capacity_provider_strategy?:      CapacityProviderStrategy;
    /** (Optional) Number of instantiations of the specified task to place on your cluster. You can specify up to 10 tasks for each call. */
    desired_count?:                   any;
    /** (Optional) Specifies whether to enable Amazon ECS managed tags for the tasks within the service. */
    enable_ecs_managed_tags?:         any;
    /** (Optional) Specifies whether to enable Amazon ECS Exec for the tasks within the service. */
    enable_execute_command?:          any;
    /** (Optional) Name of the task group to associate with the task. The default value is the family name of the task definition. */
    group?:                           any;
    /** (Optional) Launch type on which to run your service. Valid values are `EC2`, `FARGATE`, and `EXTERNAL`. */
    launch_type?:                     any;
    network_configuration?:           NetworkConfiguration;
    overrides?:                       Overrides;
    placement_constraints?:           PlacementConstraints;
    placement_strategy?:              PlacementStrategy;
    /** (Optional) The platform version the task uses. A platform version is only specified for tasks hosted on Fargate. If one isn't specified, the `LATEST` platform version is used. */
    platform_version?:                any;
    /** (Optional) Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags aren't propagated. An error will be received if you specify the `SERVICE` option when running a task. Valid values are `TASK_DEFINITION` or `NONE`. */
    propagate_tags?:                  any;
    /** (Optional) The reference ID to use for the task. */
    reference_id?:                    any;
    /** (Optional) An optional tag specified when a task is started. */
    started_by?:                      any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
    /** (Optional) One or more container overrides that are sent to a task. See below. */
    container_overrides?:             ContainerOverrides;
    /** (Optional) Elastic Inference accelerator override for the task. See below. */
    inference_accelerator_overrides?: InferenceAcceleratorOverrides;
    /** (Optional) The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. See below. */
    environment?:                     Environment;
    /** (Optional) The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU. See below. */
    resource_requirements?:           ResourceRequirements;
}

export interface CapacityProviderStrategy {
    /** (Required) Name of the capacity provider. */
    capacity_provider: any;
    /** (Optional) The number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. Defaults to `0`. */
    base:              any;
    /** (Optional) The relative percentage of the total number of launched tasks that should use the specified capacity provider. The `weight` value is taken into consideration after the `base` count of tasks has been satisfied. Defaults to `0`. */
    weight:            any;
}

export interface ContainerOverrides {
    /** (Optional) The command to send to the container that overrides the default command from the Docker image or the task definition. */
    command:               any;
    /** (Optional) The number of cpu units reserved for the container, instead of the default value from the task definition. */
    cpu:                   any;
    /** (Optional) The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. See below. */
    environment:           any;
    /** (Optional) The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed. */
    memory:                any;
    /** (Optional) The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition. */
    memory_reservation:    any;
    /** (Optional) The name of the container that receives the override. This parameter is required if any override is specified. */
    name:                  any;
    /** (Optional) The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU. See below. */
    resource_requirements: any;
}

export interface Environment {
    /** (Required) The name of the key-value pair. For environment variables, this is the name of the environment variable. */
    key:   any;
    /** (Required) The value for the specified resource type. If the `GPU` type is used, the value is the number of physical GPUs the Amazon ECS container agent reserves for the container. The number of GPUs that's reserved for all containers in a task can't exceed the number of available GPUs on the container instance that the task is launched on. If the `InferenceAccelerator` type is used, the value matches the `deviceName` for an InferenceAccelerator specified in a task definition. */
    value: any;
}

export interface InferenceAcceleratorOverrides {
    /** (Optional) The Elastic Inference accelerator device name to override for the task. This parameter must match a deviceName specified in the task definition. */
    device_name: any;
    /** (Optional) The Elastic Inference accelerator type to use. */
    device_type: any;
}

export interface NetworkConfiguration {
    /** (Required) Subnets associated with the task or service. */
    subnets:          any;
    /** (Optional) Security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. */
    security_groups:  any;
    /** (Optional) Assign a public IP address to the ENI (Fargate launch type only). Valid values are `true` or `false`. Default `false`. */
    assign_public_ip: any;
}

export interface Overrides {
    /** (Optional) One or more container overrides that are sent to a task. See below. */
    container_overrides:             any;
    /** (Optional) The number of cpu units reserved for the container, instead of the default value from the task definition. */
    cpu:                             any;
    /** (Optional) Amazon Resource Name (ARN) of the task execution role override for the task. */
    execution_role_arn:              any;
    /** (Optional) Elastic Inference accelerator override for the task. See below. */
    inference_accelerator_overrides: any;
    /** (Optional) The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed. */
    memory:                          any;
    /** (Optional) Amazon Resource Name (ARN) of the role that containers in this task can assume. */
    task_role_arn:                   any;
}

export interface PlacementConstraints {
    /** (Optional) A cluster query language expression to apply to the constraint. The expression can have a maximum length of 2000 characters. You can't specify an expression if the constraint type is `distinctInstance`. */
    expression: any;
    /** (Required) The type of resource to assign to a container. Valid values are `GPU` or `InferenceAccelerator`. */
    type:       any;
}

export interface PlacementStrategy {
    /** (Optional) The field to apply the placement strategy against. */
    field: any;
    /** (Required) The type of resource to assign to a container. Valid values are `GPU` or `InferenceAccelerator`. */
    type:  any;
}

export interface ResourceRequirements {
    /** (Required) The type of resource to assign to a container. Valid values are `GPU` or `InferenceAccelerator`. */
    type:  any;
    /** (Required) The value for the specified resource type. If the `GPU` type is used, the value is the number of physical GPUs the Amazon ECS container agent reserves for the container. The number of GPUs that's reserved for all containers in a task can't exceed the number of available GPUs on the container instance that the task is launched on. If the `InferenceAccelerator` type is used, the value matches the `deviceName` for an InferenceAccelerator specified in a task definition. */
    value: any;
}