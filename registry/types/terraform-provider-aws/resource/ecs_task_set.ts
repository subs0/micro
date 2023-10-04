export interface EcsTaskSet {
    resource: Resource[];
}

export interface Resource {
    ecs_task_set: EcsTaskSetClass;
}

export interface EcsTaskSetClass {
    /** (Required) The short name or ARN of the ECS service. */
    service:                     any;
    /** (Required) The short name or ARN of the cluster that hosts the service to create the task set in. */
    cluster:                     any;
    /** (Required) The family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service. */
    task_definition:             any;
    /** (Optional) The capacity provider strategy to use for the service. Can be one or more.  [Defined below](#capacity_provider_strategy). */
    capacity_provider_strategy?: any;
    /** (Optional) The external ID associated with the task set. */
    external_id?:                any;
    /** (Optional) Whether to allow deleting the task set without waiting for scaling down to 0. You can force a task set to delete even if it's in the process of scaling a resource. Normally, Terraform drains all the tasks before deleting the task set. This bypasses that behavior and potentially leaves resources dangling. */
    force_delete?:               any;
    /** (Optional) The launch type on which to run your service. The valid values are `EC2`, `FARGATE`, and `EXTERNAL`. Defaults to `EC2`. */
    launch_type?:                any;
    /** (Optional) Details on load balancers that are used with a task set. [Detailed below](#load_balancer). */
    load_balancer?:              any;
    /** (Optional) The platform version on which to run your service. Only applicable for `launch_type` set to `FARGATE`. Defaults to `LATEST`. More information about Fargate platform versions can be found in the [AWS ECS User Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html). */
    platform_version?:           any;
    /** (Optional) The network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes. [Detailed below](#network_configuration). */
    network_configuration?:      any;
    /** (Optional) A floating-point percentage of the desired number of tasks to place and keep running in the task set. [Detailed below](#scale). */
    scale?:                      any;
    /** (Optional) The service discovery registries for the service. The maximum number of `service_registries` blocks is `1`. [Detailed below](#service_registries). */
    service_registries?:         any;
    /** (Optional) A map of tags to assign to the file system. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. If you have set `copy_tags_to_backups` to true, and you specify one or more tags, no existing file system tags are copied from the file system to the backup. */
    tags?:                       any;
    /** (Optional) Whether `terraform` should wait until the task set has reached `STEADY_STATE`. */
    wait_until_stable?:          any;
    /** (Optional) Wait timeout for task set to reach `STEADY_STATE`. Valid time units include `ns`, `us` (or `µs`), `ms`, `s`, `m`, and `h`. Default `10m`. */
    wait_until_stable_timeout?:  any;
}