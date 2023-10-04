export interface EcsService {
    resource: Resource[];
}

export interface Resource {
    ecs_service: EcsServiceClass;
}

export interface EcsServiceClass {
    alarms?:                             Alarms;
    capacity_provider_strategy?:         CapacityProviderStrategy;
    /** (Optional) ARN of an ECS cluster. */
    cluster?:                            any;
    deployment_circuit_breaker?:         DeploymentCircuitBreaker;
    deployment_controller?:              DeploymentController;
    /** (Optional) Upper limit (as a percentage of the service's desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy. */
    deployment_maximum_percent?:         any;
    /** (Optional) Lower limit (as a percentage of the service's desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment. */
    deployment_minimum_healthy_percent?: any;
    /** (Optional) Number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the `DAEMON` scheduling strategy. */
    desired_count?:                      any;
    /** (Optional) Specifies whether to enable Amazon ECS managed tags for the tasks within the service. */
    enable_ecs_managed_tags?:            any;
    /** (Optional) Specifies whether to enable Amazon ECS Exec for the tasks within the service. */
    enable_execute_command?:             any;
    /** (Optional) Enable to force a new task deployment of the service. This can be used to update tasks to use a newer Docker image with same image/tag combination (e.g., `myimage:latest`), roll Fargate tasks onto a newer platform version, or immediately deploy `ordered_placement_strategy` and `placement_constraints` updates. */
    force_new_deployment?:               any;
    /** (Optional) Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 2147483647. Only valid for services configured to use load balancers. */
    health_check_grace_period_seconds?:  any;
    /** (Optional) ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the `awsvpc` network mode. If using `awsvpc` network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here. */
    iam_role?:                           any;
    /** (Optional) Launch type on which to run your service. The valid values are `EC2`, `FARGATE`, and `EXTERNAL`. Defaults to `EC2`. */
    launch_type?:                        any;
    load_balancer?:                      LoadBalancer;
    network_configuration?:              NetworkConfiguration;
    ordered_placement_strategy?:         OrderedPlacementStrategy;
    placement_constraints?:              PlacementConstraints;
    /** (Optional) Platform version on which to run your service. Only applicable for `launch_type` set to `FARGATE`. Defaults to `LATEST`. More information about Fargate platform versions can be found in the [AWS ECS User Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html). */
    platform_version?:                   any;
    /** (Optional) Specifies whether to propagate the tags from the task definition or the service to the tasks. The valid values are `SERVICE` and `TASK_DEFINITION`. */
    propagate_tags?:                     any;
    /** (Optional) Scheduling strategy to use for the service. The valid values are `REPLICA` and `DAEMON`. Defaults to `REPLICA`. Note that [*Tasks using the Fargate launch type or the `CODE_DEPLOY` or `EXTERNAL` deployment controller types don't support the `DAEMON` scheduling strategy*](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html). */
    scheduling_strategy?:                any;
    service_connect_configuration?:      ServiceConnectConfiguration;
    service_registries?:                 ServiceRegistries;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                               any;
    /** (Optional) Family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service. Required unless using the `EXTERNAL` deployment controller. If a revision is not specified, the latest `ACTIVE` revision is used. */
    task_definition?:                    any;
    /** (Optional) Map of arbitrary keys and values that, when changed, will trigger an in-place update (redeployment). Useful with `timestamp()`. See example above. */
    triggers?:                           any;
    /** (Optional) If `true`, Terraform will wait for the service to reach a steady state (like [`aws ecs wait services-stable`](https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html)) before continuing. Default `false`. */
    wait_for_steady_state?:              any;
    /** (Optional) The log configuration for the container. See below. */
    log_configuration?:                  LogConfiguration;
    /** (Optional) The list of Service Connect service objects. See below. */
    service?:                            Service;
    /** (Optional) The secrets to pass to the log configuration. See below. */
    secret_option?:                      SecretOption;
    /** (Optional) The list of client aliases for this Service Connect service. You use these to assign names that can be used by client applications. The maximum number of client aliases that you can have in this list is 1. See below. */
    client_alias?:                       ClientAlias;
}

export interface Alarms {
    /** (Required) One or more CloudWatch alarm names. */
    alarm_names: any;
    /** (Required) Whether to enable the deployment circuit breaker logic for the service. */
    enable:      any;
    /** (Required) Whether to enable Amazon ECS to roll back the service if a service deployment fails. If rollback is enabled, when a service deployment fails, the service is rolled back to the last deployment that completed successfully. */
    rollback:    any;
}

export interface CapacityProviderStrategy {
    /** (Optional) Number of tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. */
    base:              any;
    /** (Required) Short name of the capacity provider. */
    capacity_provider: any;
    /** (Required) Relative percentage of the total number of launched tasks that should use the specified capacity provider. */
    weight:            any;
}

export interface ClientAlias {
    /** (Optional) The name that you use in the applications of client tasks to connect to this service. */
    dns_name: any;
    /** (Required) The listening port number for the Service Connect proxy. This port is available inside of all of the tasks within the same namespace. */
    port:     any;
}

export interface DeploymentCircuitBreaker {
    /** (Required) Whether to enable the deployment circuit breaker logic for the service. */
    enable:   any;
    /** (Required) Whether to enable Amazon ECS to roll back the service if a service deployment fails. If rollback is enabled, when a service deployment fails, the service is rolled back to the last deployment that completed successfully. */
    rollback: any;
}

export interface DeploymentController {
    /** (Required) Type of constraint. The only valid values at this time are `memberOf` and `distinctInstance`. */
    type: any;
}

export interface LoadBalancer {
    /** (Required for ELB Classic) Name of the ELB (Classic) to associate with the service. */
    elb_name:         any;
    /** (Required for ALB/NLB) ARN of the Load Balancer target group to associate with the service. */
    target_group_arn: any;
    /** (Optional) Container name value, already specified in the task definition, to be used for your service discovery service. */
    container_name:   any;
    /** (Optional) Port value, already specified in the task definition, to be used for your service discovery service. */
    container_port:   any;
}

export interface LogConfiguration {
    /** (Required) The log driver to use for the container. */
    log_driver:    any;
    /** (Optional) The configuration options to send to the log driver. */
    options:       any;
    /** (Optional) The secrets to pass to the log configuration. See below. */
    secret_option: any;
}

export interface NetworkConfiguration {
    /** (Required) Subnets associated with the task or service. */
    subnets:          any;
    /** (Optional) Security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. */
    security_groups:  any;
    /** (Optional) Assign a public IP address to the ENI (Fargate launch type only). Valid values are `true` or `false`. Default `false`. */
    assign_public_ip: any;
}

export interface OrderedPlacementStrategy {
    /** (Required) Type of constraint. The only valid values at this time are `memberOf` and `distinctInstance`. */
    type:  any;
    /** (Optional) For the `spread` placement strategy, valid values are `instanceId` (or `host`, */
    field: any;
}

export interface PlacementConstraints {
    /** (Required) Type of constraint. The only valid values at this time are `memberOf` and `distinctInstance`. */
    type:       any;
    /**  (Optional) Cluster Query Language expression to apply to the constraint. Does not need to be specified for the `distinctInstance` type. For more information, see [Cluster Query Language in the Amazon EC2 Container Service Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html). */
    expression: any;
}

export interface SecretOption {
    /** (Required) The name of the secret. */
    name:       any;
    /** (Required) The secret to expose to the container. The supported values are either the full ARN of the AWS Secrets Manager secret or the full ARN of the parameter in the SSM Parameter Store. */
    value_from: any;
}

export interface Service {
    /** (Optional) The list of client aliases for this Service Connect service. You use these to assign names that can be used by client applications. The maximum number of client aliases that you can have in this list is 1. See below. */
    client_alias:          any;
    /** (Optional) The name of the new AWS Cloud Map service that Amazon ECS creates for this Amazon ECS service. */
    discovery_name:        any;
    /** (Optional) The port number for the Service Connect proxy to listen on. */
    ingress_port_override: any;
    /** (Required) The name of one of the `portMappings` from all the containers in the task definition of this Amazon ECS service. */
    port_name:             any;
}

export interface ServiceConnectConfiguration {
    /** (Required) Specifies whether to use Service Connect with this service. */
    enabled:           any;
    /** (Optional) The log configuration for the container. See below. */
    log_configuration: any;
    /** (Optional) The namespace name or ARN of the [`aws_service_discovery_http_namespace`](/docs/providers/aws/r/service_discovery_http_namespace.html) for use with Service Connect. */
    namespace:         any;
    /** (Optional) The list of Service Connect service objects. See below. */
    service:           any;
}

export interface ServiceRegistries {
    /** (Required) ARN of the Service Registry. The currently supported service registry is Amazon Route 53 Auto Naming Service(`aws_service_discovery_service`). For more information, see [Service](https://docs.aws.amazon.com/Route53/latest/APIReference/API_autonaming_Service.html) */
    registry_arn:   any;
    /** (Required) The listening port number for the Service Connect proxy. This port is available inside of all of the tasks within the same namespace. */
    port:           any;
    /** (Optional) Port value, already specified in the task definition, to be used for your service discovery service. */
    container_port: any;
    /** (Optional) Container name value, already specified in the task definition, to be used for your service discovery service. */
    container_name: any;
}