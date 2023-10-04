export interface SagemakerEndpoint {
    resource: Resource[];
}

export interface Resource {
    sagemaker_endpoint: SagemakerEndpointClass;
}

export interface SagemakerEndpointClass {
    /** (Required) The name of the endpoint configuration to use. */
    endpoint_config_name:                  any;
    /** (Optional) The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations. See [Deployment Config](#deployment-config). */
    deployment_config?:                    any;
    /** (Optional) The name of the endpoint. If omitted, Terraform will assign a random, unique name. */
    name?:                                 any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                 any;
    /** (Optional) Update policy for a blue/green deployment. If this update policy is specified, SageMaker creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips traffic to the new fleet according to the specified traffic routing configuration. Only one update policy should be used in the deployment configuration. If no update policy is specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting by default. See [Blue Green Update Config](#blue-green-update-config). */
    blue_green_update_policy?:             any;
    /** (Optional) Automatic rollback configuration for handling endpoint deployment failures and recovery. See [Auto Rollback Configuration](#auto-rollback-configuration). */
    auto_rollback_configuration?:          any;
    /** (Optional) Specifies a rolling deployment strategy for updating a SageMaker endpoint. See [Rolling Update Policy](#rolling-update-policy). */
    rolling_update_policy?:                any;
    /** (Required) Defines the traffic routing strategy to shift traffic from the old fleet to the new fleet during an endpoint deployment. See [Traffic Routing Configuration](#traffic-routing-configuration). */
    traffic_routing_configuration:         any;
    /** (Optional) The time limit for the total deployment. Exceeding this limit causes a timeout. Valid values are between `600` and `14400`. */
    maximum_execution_timeout_in_seconds?: any;
    /** (Optional) Additional waiting time in seconds after the completion of an endpoint deployment before terminating the old endpoint fleet. Default is `0`. Valid values are between `0` and `3600`. */
    termination_wait_in_seconds?:          any;
    /** (Required) Batch size for each rolling step to provision capacity and turn on traffic on the new endpoint fleet, and terminate capacity on the old endpoint fleet. Value must be between 5% to 50% of the variant's total instance count. See [Maximum Batch Size](#maximum-batch-size). */
    maximum_batch_size:                    any;
    /** (Optional) Batch size for rollback to the old endpoint fleet. Each rolling step to provision capacity and turn on traffic on the old endpoint fleet, and terminate capacity on the new endpoint fleet. If this field is absent, the default value will be set to 100% of total capacity which means to bring up the whole capacity of the old fleet at once during rollback. See [Rollback Maximum Batch Size](#rollback-maximum-batch-size). */
    rollback_maximum_batch_size?:          any;
    /** (Required) The waiting time (in seconds) between incremental steps to turn on traffic on the new endpoint fleet. Valid values are between `0` and `3600`. */
    wait_interval_in_seconds:              any;
    /** (Required) Specifies the endpoint capacity type. Valid values are: `INSTANCE_COUNT`, or `CAPACITY_PERCENT`. */
    type:                                  any;
    /** (Optional) Batch size for the first step to turn on traffic on the new endpoint fleet. Value must be less than or equal to 50% of the variant's total instance count. See [Canary Size](#canary-size). */
    canary_size?:                          any;
    /** (Optional) Batch size for each step to turn on traffic on the new endpoint fleet. Value must be 10-50% of the variant's total instance count. See [Linear Step Size](#linear-step-size). */
    linear_step_size?:                     any;
    /** (Required) Defines the capacity size, either as a number of instances or a capacity percentage. */
    value:                                 any;
    /** (Required) List of CloudWatch alarms in your account that are configured to monitor metrics on an endpoint. If any alarms are tripped during a deployment, SageMaker rolls back the deployment. See [Alarms](#alarms). */
    alarms:                                any;
    /** (Required) The name of a CloudWatch alarm in your account. */
    alarm_name:                            any;
}