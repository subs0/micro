export interface EcsCapacityProvider {
    resource: Resource[];
}

export interface Resource {
    ecs_capacity_provider: EcsCapacityProviderClass;
}

export interface EcsCapacityProviderClass {
    /** (Required) Configuration block for the provider for the ECS auto scaling group. Detailed below. */
    auto_scaling_group_provider:     any;
    /** (Required) Name of the capacity provider. */
    name:                            any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
    /** (Required) - ARN of the associated auto scaling group. */
    auto_scaling_group_arn:          any;
    /** (Optional) - Configuration block defining the parameters of the auto scaling. Detailed below. */
    managed_scaling?:                any;
    /** (Optional) - Enables or disables container-aware termination of instances in the auto scaling group when scale-in happens. Valid values are `ENABLED` and `DISABLED`. */
    managed_termination_protection?: any;
    /** (Optional) Period of time, in seconds, after a newly launched Amazon EC2 instance can contribute to CloudWatch metrics for Auto Scaling group. If this parameter is omitted, the default value of 300 seconds is used. */
    instance_warmup_period?:         any;
    /** (Optional) Maximum step adjustment size. A number between 1 and 10,000. */
    maximum_scaling_step_size?:      any;
    /** (Optional) Minimum step adjustment size. A number between 1 and 10,000. */
    minimum_scaling_step_size?:      any;
    /** (Optional) Whether auto scaling is managed by ECS. Valid values are `ENABLED` and `DISABLED`. */
    status?:                         any;
    /** (Optional) Target utilization for the capacity provider. A number between 1 and 100. */
    target_capacity?:                any;
}