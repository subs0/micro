export interface CloudwatchEventTarget {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_event_target: CloudwatchEventTargetClass;
}

export interface CloudwatchEventTargetClass {
    /** (Required) The Amazon Resource Name (ARN) of the target. */
    arn:                         any;
    /** (Required) The name of the rule you want to add targets to. */
    rule:                        any;
    batch_target?:               BatchTarget;
    dead_letter_config?:         DeadLetterConfig;
    ecs_target?:                 EcsTarget;
    /** (Optional) The name or ARN of the event bus to associate with the rule. */
    event_bus_name?:             any;
    http_target?:                HTTPTarget;
    /** (Optional) Valid JSON text passed to the target. Conflicts with `input_path` and `input_transformer`. */
    input?:                      any;
    /** (Optional) The value of the [JSONPath](http://goessner.net/articles/JsonPath/) that is used for extracting part of the matched event when passing it to the target. Conflicts with `input` and `input_transformer`. */
    input_path?:                 any;
    input_transformer?:          InputTransformer;
    kinesis_target?:             KinesisTarget;
    /** (Optional) The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. Required if `ecs_target` is used or target in `arn` is EC2 instance, Kinesis data stream, Step Functions state machine, or Event Bus in different account or region. */
    role_arn?:                   any;
    run_command_targets?:        RunCommandTargets;
    redshift_target?:            RedshiftTarget;
    retry_policy?:               RetryPolicy;
    sagemaker_pipeline_target?:  SagemakerPipelineTarget;
    sqs_target?:                 SqsTarget;
    /** (Optional) The unique target assignment ID. If missing, will generate a random, unique id. */
    target_id?:                  any;
    /** (Optional) The capacity provider strategy to use for the task. If a `capacity_provider_strategy` specified, the `launch_type` parameter must be omitted. If no `capacity_provider_strategy` or `launch_type` is specified, the default capacity provider strategy for the cluster is used. Can be one or more. See below. */
    capacity_provider_strategy?: CapacityProviderStrategy;
    /** (Optional) Use this if the ECS task uses the awsvpc network mode. This specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. Required if `launch_type` is `FARGATE` because the awsvpc mode is required for Fargate tasks. */
    network_configuration?:      NetworkConfiguration;
    /** (Optional) An array of placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task. */
    ordered_placement_strategy?: OrderedPlacementStrategy;
    /** (Optional) An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime). See Below. */
    placement_constraint?:       PlacementConstraint;
}

export interface BatchTarget {
    /** (Required) The ARN or name of the job definition to use if the event target is an AWS Batch job. This job definition must already exist. */
    job_definition: any;
    /** (Required) The name to use for this execution of the job, if the target is an AWS Batch job. */
    job_name:       any;
    /** (Optional) The size of the array, if this is an array batch job. Valid values are integers between 2 and 10,000. */
    array_size:     any;
    /** (Optional) The number of times to attempt to retry, if the job fails. Valid values are 1 to 10. */
    job_attempts:   any;
}

export interface CapacityProviderStrategy {
    /** (Required) Short name of the capacity provider. */
    capacity_provider: any;
    /** (Required) The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied. */
    weight:            any;
    /** (Optional) The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. Defaults to `0`. */
    base:              any;
}

export interface DeadLetterConfig {
    /** (Required) The Amazon Resource Name (ARN) of the target. */
    arn: any;
}

export interface EcsTarget {
    /** (Required) The ARN of the task definition to use if the event target is an Amazon ECS cluster. */
    task_definition_arn:        any;
    /** (Optional) The capacity provider strategy to use for the task. If a `capacity_provider_strategy` specified, the `launch_type` parameter must be omitted. If no `capacity_provider_strategy` or `launch_type` is specified, the default capacity provider strategy for the cluster is used. Can be one or more. See below. */
    capacity_provider_strategy: any;
    /** (Optional) Specifies whether to enable Amazon ECS managed tags for the task. */
    enable_ecs_managed_tags:    any;
    /** (Optional) Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task. */
    enable_execute_command:     any;
    /** (Optional) Specifies an ECS task group for the task. The maximum length is 255 characters. */
    group:                      any;
    /** (Optional) Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. Valid values include: `EC2`, `EXTERNAL`, or `FARGATE`. */
    launch_type:                any;
    /** (Optional) Use this if the ECS task uses the awsvpc network mode. This specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. Required if `launch_type` is `FARGATE` because the awsvpc mode is required for Fargate tasks. */
    network_configuration:      any;
    /** (Optional) An array of placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task. */
    ordered_placement_strategy: any;
    /** (Optional) An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime). See Below. */
    placement_constraint:       any;
    /** (Optional) Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as `1.1.0`. This is used only if LaunchType is FARGATE. For more information about valid platform versions, see [AWS Fargate Platform Versions](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html). */
    platform_version:           any;
    /** (Optional) Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. The only valid value is: `TASK_DEFINITION`. */
    propagate_tags:             any;
    /** (Optional) The number of tasks to create based on the TaskDefinition. Defaults to `1`. */
    task_count:                 any;
    /** (Optional) A map of tags to assign to ecs resources. */
    tags:                       any;
}

export interface HTTPTarget {
    /** (Optional) Enables you to specify HTTP headers to add to the request. */
    header_parameters:       any;
    /** (Optional) The list of values that correspond sequentially to any path variables in your endpoint ARN (for example `arn:aws:execute-api:us-east-1:123456:myapi/*/POST/pets/*`). */
    path_parameter_values:   any;
    query_any_parameters: string;
}

export interface InputTransformer {
    /** (Required) Template to customize data sent to the target. Must be valid JSON. To send a string value, the string value must include double quotes. Values must be escaped for both JSON and Terraform, e.g., `"\"Your string goes here.\\nA new line.\""` */
    input_template: any;
    /** (Optional) Key value pairs specified in the form of JSONPath (for example, time = $.time) */
    input_paths:    any;
}

export interface KinesisTarget {
    /** (Optional) The JSON path to be extracted from the event and used as the partition key. */
    partition_key_path: any;
}

export interface NetworkConfiguration {
    /** (Required) The subnets associated with the task or service. */
    subnets:          any;
    /** (Optional) The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. */
    security_groups:  any;
    /** (Optional) Assign a public IP address to the ENI (Fargate launch type only). Valid values are `true` or `false`. Defaults to `false`. */
    assign_public_ip: any;
}

export interface OrderedPlacementStrategy {
    /** (Required) Type of constraint. The only valid values at this time are `memberOf` and `distinctInstance`. */
    type:  any;
    /** (Optional) The field to apply the placement strategy against. For the `spread` placement strategy, valid values are `instanceId` (or `host`, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as `attribute:ecs.availability-zone`. For the `binpack` placement strategy, valid values are `cpu` and `memory`. For the `random` placement strategy, this field is not used. For more information, see [Amazon ECS task placement strategies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html). */
    field: any;
}

export interface PlacementConstraint {
    /** (Required) Type of constraint. The only valid values at this time are `memberOf` and `distinctInstance`. */
    type:       any;
    /**  (Optional) Cluster Query Language expression to apply to the constraint. Does not need to be specified for the `distinctInstance` type. For more information, see [Cluster Query Language in the Amazon EC2 Container Service Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html). */
    expression: any;
}

export interface RedshiftTarget {
    /** (Required) The name of the database. */
    database:            any;
    /** (Optional) The database user name. */
    db_user:             any;
    /** (Optional) The name or ARN of the secret that enables access to the database. */
    secrets_manager_arn: any;
    /** (Optional) The SQL statement text to run. */
    sql:                 any;
    /** (Optional) The name of the SQL statement. */
    statement_name:      any;
    /** (Optional) Indicates whether to send an event back to EventBridge after the SQL statement runs. */
    with_event:          any;
}

export interface RetryPolicy {
    /** (Optional) The age in seconds to continue to make retry attempts. */
    maximum_event_age_in_seconds: any;
    /** (Optional) maximum number of retry attempts to make before the request fails */
    maximum_retry_attempts:       any;
}

export interface RunCommandTargets {
    /** (Required) Can be either `tag:tag-key` or `InstanceIds`. */
    key:    any;
    /** (Required) If Key is `tag:tag-key`, Values is a list of tag values. If Key is `InstanceIds`, Values is a list of Amazon EC2 instance IDs. */
    values: any;
}

export interface SagemakerPipelineTarget {
    /** (Optional) List of Parameter names and values for SageMaker Model Building Pipeline execution. */
    pipeline_parameter_list: any;
    /** (Required) Name of parameter to start execution of a SageMaker Model Building Pipeline. */
    name:                    any;
    /** (Required) Value of parameter to start execution of a SageMaker Model Building Pipeline. */
    value:                   any;
}

export interface SqsTarget {
    /** (Optional) The FIFO message group ID to use as the target. */
    message_group_id: any;
}