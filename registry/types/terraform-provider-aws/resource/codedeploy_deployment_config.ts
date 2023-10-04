export interface CodedeployDeploymentConfig {
    resource: Resource[];
}

export interface Resource {
    codedeploy_deployment_config: CodedeployDeploymentConfigClass;
}

export interface CodedeployDeploymentConfigClass {
    /** (Required) The name of the deployment config. */
    deployment_config_name:  any;
    /** (Optional) The compute platform can be `Server`, `Lambda`, or `ECS`. Default is `Server`. */
    compute_platform?:       any;
    /** (Optional) A minimum_healthy_hosts block. Required for `Server` compute platform. Minimum Healthy Hosts are documented below. */
    minimum_healthy_hosts?:  any;
    /** (Optional) A traffic_routing_config block. Traffic Routing Config is documented below. */
    traffic_routing_config?: any;
    /** (Required) The type can either be `FLEET_PERCENT` or `HOST_COUNT`. */
    type:                    any;
    /** (Required) The value when the type is `FLEET_PERCENT` represents the minimum number of healthy instances as */
    value:                   any;
    /** (Optional) The time based canary configuration information. If `type` is `TimeBasedLinear`, use `time_based_linear` instead. */
    time_based_canary?:      any;
    /** (Optional) The time based linear configuration information. If `type` is `TimeBasedCanary`, use `time_based_canary` instead. */
    time_based_linear?:      any;
    /** (Optional) The number of minutes between each incremental traffic shift of a `TimeBasedLinear` deployment. */
    interval?:               any;
    /** (Optional) The percentage of traffic that is shifted at the start of each increment of a `TimeBasedLinear` deployment. */
    percentage?:             any;
}