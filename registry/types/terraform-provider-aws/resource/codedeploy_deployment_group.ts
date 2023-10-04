export interface CodedeployDeploymentGroup {
    resource: Resource[];
}

export interface Resource {
    codedeploy_deployment_group: CodedeployDeploymentGroupClass;
}

export interface CodedeployDeploymentGroupClass {
    /** (Required) The name of the application. */
    app_name:                                        any;
    /** (Required) The name of the deployment group. */
    deployment_group_name:                           any;
    /** (Required) The service role ARN that allows deployments. */
    service_role_arn:                                any;
    /** (Optional) Configuration block of alarms associated with the deployment group (documented below). */
    alarm_configuration?:                            any;
    /** (Optional) Configuration block of the automatic rollback configuration associated with the deployment group (documented below). */
    auto_rollback_configuration?:                    any;
    /** (Optional) Autoscaling groups associated with the deployment group. */
    autoscaling_groups?:                             any;
    /** (Optional) Configuration block of the blue/green deployment options for a deployment group (documented below). */
    blue_green_deployment_config?:                   any;
    /** (Optional) The name of the group's deployment config. The default is "CodeDeployDefault.OneAtATime". */
    deployment_config_name?:                         any;
    /** (Optional) Configuration block of the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer (documented below). */
    deployment_style?:                               any;
    /** (Optional) Tag filters associated with the deployment group. See the AWS docs for details. */
    ec2_tag_filter?:                                 any;
    /** (Optional) Configuration block(s) of Tag filters associated with the deployment group, which are also referred to as tag groups (documented below). See the AWS docs for details. */
    ec2_tag_set?:                                    any;
    /** (Optional) Configuration block(s) of the ECS services for a deployment group (documented below). */
    ecs_service?:                                    any;
    /** (Optional) Single configuration block of the load balancer to use in a blue/green deployment (documented below). */
    load_balancer_info?:                             any;
    /** (Optional) On premise tag filters associated with the group. See the AWS docs for details. */
    on_premises_instance_tag_filter?:                any;
    /** (Optional) Configuration block(s) of the triggers for the deployment group (documented below). */
    trigger_configuration?:                          any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                           any;
    /** (Optional) A list of alarms configured for the deployment group. _A maximum of 10 alarms can be added to a deployment group_. */
    alarms?:                                         any;
    /** (Optional) Indicates whether a defined automatic rollback configuration is currently enabled for this Deployment Group. If you enable automatic rollback, you must specify at least one event type. */
    enabled?:                                        any;
    /** (Optional) Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from CloudWatch. The default value is `false`. */
    ignore_poll_alarm_failure?:                      any;
    /** (Optional) The event type or types that trigger a rollback. Supported types are `DEPLOYMENT_FAILURE` and `DEPLOYMENT_STOP_ON_ALARM`. */
    events?:                                         any;
    /** (Optional) Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment (documented below). */
    deployment_ready_option?:                        any;
    /** (Optional) Information about how instances are provisioned for a replacement environment in a blue/green deployment (documented below). */
    green_fleet_provisioning_option?:                any;
    /** (Optional) Information about whether to terminate instances in the original fleet during a blue/green deployment (documented below). */
    terminate_blue_instances_on_deployment_success?: any;
    /** (Optional) When to reroute traffic from an original environment to a replacement environment in a blue/green deployment. */
    action_on_timeout?:                              any;
    /** (Optional) The number of minutes to wait before the status of a blue/green deployment changed to Stopped if rerouting is not started manually. Applies only to the `STOP_DEPLOYMENT` option for `action_on_timeout`. */
    wait_time_in_minutes?:                           any;
    /** (Optional) The action to take on instances in the original environment after a successful blue/green deployment. */
    action?:                                         any;
    /** (Optional) The number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment. */
    termination_wait_time_in_minutes?:               any;
    /** (Optional) Indicates whether to route deployment traffic behind a load balancer. Valid Values are `WITH_TRAFFIC_CONTROL` or `WITHOUT_TRAFFIC_CONTROL`. Default is `WITHOUT_TRAFFIC_CONTROL`. */
    deployment_option?:                              any;
    /** (Optional) Indicates whether to run an in-place deployment or a blue/green deployment. Valid Values are `IN_PLACE` or `BLUE_GREEN`. Default is `IN_PLACE`. */
    deployment_type?:                                any;
    /** (Optional) The key of the tag filter. */
    key?:                                            any;
    /** (Optional) The type of the tag filter, either `KEY_ONLY`, `VALUE_ONLY`, or `KEY_AND_VALUE`. */
    type?:                                           any;
    /** (Optional) The value of the tag filter. */
    value?:                                          any;
    /** (Required) The name of the ECS cluster. */
    cluster_name:                                    any;
    /** (Required) The name of the ECS service. */
    service_name:                                    any;
    /** (Optional) The Classic Elastic Load Balancer to use in a deployment. Conflicts with `target_group_info` and `target_group_pair_info`. */
    elb_info?:                                       any;
    /** (Optional) The (Application/Network Load Balancer) target group to use in a deployment. Conflicts with `elb_info` and `target_group_pair_info`. */
    target_group_info?:                              any;
    /** (Optional) The (Application/Network Load Balancer) target group pair to use in a deployment. Conflicts with `elb_info` and `target_group_info`. */
    target_group_pair_info?:                         any;
    /** (Required) Name of the target group. */
    name:                                            any;
    /** (Required) Configuration block for the production traffic route (documented below). */
    prod_traffic_route:                              any;
    /** (Required) Configuration blocks for a target group within a target group pair (documented below). */
    target_group:                                    any;
    /** (Optional) Configuration block for the test traffic route (documented below). */
    test_traffic_route?:                             any;
    /** (Required) List of Amazon Resource Names (ARNs) of the load balancer listeners. */
    listener_arns:                                   any;
    /** (Required) The event type or types for which notifications are triggered. Some values that are supported: `DeploymentStart`, `DeploymentSuccess`, `DeploymentFailure`, `DeploymentStop`, `DeploymentRollback`, `InstanceStart`, `InstanceSuccess`, `InstanceFailure`.  See [the CodeDeploy documentation][1] for all possible values. */
    trigger_events:                                  any;
    /** (Required) The name of the notification trigger. */
    trigger_name:                                    any;
    /** (Required) The ARN of the SNS topic through which notifications are sent. */
    trigger_target_arn:                              any;
}