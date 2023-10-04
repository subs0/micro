export interface SpotFleetRequest {
    resource: Resource[];
}

export interface Resource {
    spot_fleet_request: SpotFleetRequestClass;
}

export interface SpotFleetRequestClass {
    /** (Required) Grants the Spot fleet permission to terminate */
    iam_fleet_role:                                    any;
    /** (Optional) Reserved. */
    context?:                                          any;
    /** (Optional) Indicates whether Spot fleet should replace unhealthy instances. Default `false`. */
    replace_unhealthy_instances?:                      any;
    /** (Optional) Used to define the launch configuration of the */
    launch_specification?:                             any;
    /** (Optional) Launch template configuration block. See [Launch Template Configs](#launch-template-configs) below for more details. Conflicts with `launch_specification`. At least one of `launch_specification` or `launch_template_config` is required. */
    launch_template_config?:                           any;
    spot_maintenance_strategies?:                      SpotMaintenanceStrategies;
    /** (Optional) The maximum spot bid for this override request. */
    spot_price?:                                       any;
    /** (Optional; Default: false) If set, Terraform will */
    wait_for_fulfillment?:                             any;
    /** The number of units to request. You can choose to set the */
    target_capacity?:                                  any;
    /** (Optional) The unit for the target capacity. This can only be done with `instance_requirements` defined */
    target_capacity_unit_type?:                        any;
    /** Indicates how to allocate the target capacity across */
    allocation_strategy?:                              any;
    /** (Optional; Default: 1) */
    instance_pools_to_use_count?:                      any;
    /** Indicates whether running Spot */
    excess_capacity_termination_policy?:               any;
    /** (Optional) Indicates whether running Spot */
    terminate_instances_with_expiration?:              any;
    /** (Optional) Indicates whether running Spot */
    terminate_instances_on_delete?:                    any;
    /** (Optional) Indicates whether a Spot */
    instance_interruption_behaviour?:                  any;
    /** (Optional) The type of fleet request. Indicates whether the Spot Fleet only requests the target */
    fleet_type?:                                       any;
    /** (Optional) The end date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new Spot instance requests are placed or enabled to fulfill the request. */
    valid_until?:                                      any;
    /** (Optional) The start date and time of the request, in UTC [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.8) format(for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately. */
    valid_from?:                                       any;
    /** The order of the launch template overrides to use in fulfilling On-Demand capacity. the possible values are: `lowestPrice` and `prioritized`. the default is `lowestPrice`. */
    on_demand_allocation_strategy?:                    any;
    /** The maximum amount per hour for On-Demand Instances that you're willing to pay. When the maximum amount you're willing to pay is reached, the fleet stops launching instances even if it hasn’t met the target capacity. */
    on_demand_max_total_price?:                        any;
    /** The number of On-Demand units to request. If the request type is `maintain`, you can specify a target capacity of 0 and add capacity later. */
    on_demand_target_capacity?:                        any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                             any;
    /** (Required) Launch template specification. See [Launch Template Specification](#launch-template-specification) below for more details. */
    launch_template_specification:                     any;
    /** (Optional) One or more override configurations. See [Overrides](#overrides) below for more details. */
    overrides?:                                        any;
    /** The ID of the launch template. Conflicts with `name`. */
    id?:                                               any;
    /** The name of the launch template. Conflicts with `id`. */
    name?:                                             any;
    /** (Optional) Template version. Unlike the autoscaling equivalent, does not support `$Latest` or `$Default`, so use the launch_template resource's attribute, e.g., `"${aws_launch_template.foo.latest_version}"`. It will use the default version if omitted. */
    version?:                                          any;
    /** (Optional) Nested argument containing the capacity rebalance for your fleet request. Defined below. */
    capacity_rebalance?:                               CapacityRebalance;
    /** (Optional) The availability zone in which to place the request. */
    availability_zone?:                                any;
    /** (Optional) The instance requirements. See below. */
    instance_requirements?:                            any;
    /** (Optional) The type of instance to request. */
    instance_type?:                                    any;
    /** (Optional) The priority for the launch template override. The lower the number, the higher the priority. If no number is set, the launch template override has the lowest priority. */
    priority?:                                         any;
    /** (Optional) The subnet in which to launch the requested instance. */
    subnet_id?:                                        any;
    /** (Optional) The capacity added to the fleet by a fulfilled request. */
    weighted_capacity?:                                any;
    /** (Optional) Block describing the minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips). Default is no minimum or maximum. */
    accelerator_count?:                                any;
    /** (Optional) Minimum. */
    min?:                                              any;
    /** (Optional) Maximum. */
    max?:                                              any;
    /** (Optional) List of accelerator manufacturer names. Default is any manufacturer. */
    accelerator_manufacturers?:                        any;
    /** (Optional) List of accelerator names. Default is any acclerator. */
    accelerator_names?:                                any;
    /** (Optional) Block describing the minimum and maximum total memory of the accelerators. Default is no minimum or maximum. */
    accelerator_total_memory_mib?:                     any;
    /** (Optional) List of accelerator types. Default is any accelerator type. */
    accelerator_types?:                                any;
    /** (Optional) List of instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes. You can use strings with one or more wild cards, represented by an asterisk (\*), to allow an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are allowing the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are allowing all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is all instance types. */
    allowed_instance_types?:                           any;
    /** (Optional) Indicate whether bare metal instace types should be `included`, `excluded`, or `required`. Default is `excluded`. */
    bare_metal?:                                       any;
    /** (Optional) Block describing the minimum and maximum baseline EBS bandwidth, in Mbps. Default is no minimum or maximum. */
    baseline_ebs_bandwidth_mbps?:                      any;
    /** (Optional) Indicate whether burstable performance instance types should be `included`, `excluded`, or `required`. Default is `excluded`. */
    burstable_performance?:                            any;
    /** (Optional) List of instance types to exclude. You can use strings with one or more wild cards, represented by an asterisk (\*), to exclude an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are excluding all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is no excluded instance types. */
    excluded_instance_types?:                          any;
    /** (Optional) List of instance generation names. Default is any generation. */
    instance_generations?:                             any;
    /** (Optional) Indicate whether instance types with local storage volumes are `included`, `excluded`, or `required`. Default is `included`. */
    local_storage?:                                    any;
    /** (Optional) List of local storage type names. Default any storage type. */
    local_storage_types?:                              any;
    /** (Optional) Block describing the minimum and maximum amount of memory (GiB) per vCPU. Default is no minimum or maximum. */
    memory_gib_per_vcpu?:                              any;
    /** (Optional) Block describing the minimum and maximum amount of memory (MiB). Default is no maximum. */
    memory_mib?:                                       any;
    /** (Optional) Block describing the minimum and maximum amount of network bandwidth, in gigabits per second (Gbps). Default is no minimum or maximum. */
    network_bandwidth_gbps?:                           any;
    /** (Optional) Block describing the minimum and maximum number of network interfaces. Default is no minimum or maximum. */
    network_interface_count?:                          any;
    /** (Optional) The price protection threshold for On-Demand Instances. This is the maximum you’ll pay for an On-Demand Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 20. */
    on_demand_max_price_percentage_over_lowest_price?: any;
    /** (Optional) Indicate whether instance types must support On-Demand Instance Hibernation, either `true` or `false`. Default is `false`. */
    require_hibernate_support?:                        any;
    /** (Optional) The price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 100. */
    spot_max_price_percentage_over_lowest_price?:      any;
    /** (Optional) Block describing the minimum and maximum total local storage (GB). Default is no minimum or maximum. */
    total_local_storage_gb?:                           any;
    /** (Optional) Block describing the minimum and maximum number of vCPUs. Default is no maximum. */
    vcpu_count?:                                       any;
}

export interface CapacityRebalance {
    /** (Optional) The replacement strategy to use. Only available for spot fleets with `fleet_type` set to `maintain`. Valid values: `launch`. */
    replacement_strategy: any;
}

export interface SpotMaintenanceStrategies {
    /** (Optional) Nested argument containing the capacity rebalance for your fleet request. Defined below. */
    capacity_rebalance: any;
}