export interface Ec2Fleet {
    resource: Resource[];
}

export interface Resource {
    ec2_fleet: Ec2FleetClass;
}

export interface Ec2FleetClass {
    /** (Optional) Reserved. */
    context?:                             any;
    /** (Optional) Whether running instances should be terminated if the total target capacity of the EC2 Fleet is decreased below the current size of the EC2. Valid values: `no-termination`, `termination`. Defaults to `termination`. Supported only for fleets of type `maintain`. */
    excess_capacity_termination_policy?:  any;
    launch_template_config:               LaunchTemplateConfig;
    on_demand_options?:                   OnDemandOptions;
    /** (Optional) Whether EC2 Fleet should replace unhealthy instances. Defaults to `false`. Supported only for fleets of type `maintain`. */
    replace_unhealthy_instances?:         any;
    spot_options?:                        SpotOptions;
    /** (Optional) Map of Fleet tags. To tag instances at launch, specify the tags in the Launch Template. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                any;
    target_capacity_specification:        TargetCapacitySpecification;
    /** (Optional) Whether to terminate instances for an EC2 Fleet if it is deleted successfully. Defaults to `false`. */
    terminate_instances?:                 any;
    /** (Optional) Whether running instances should be terminated when the EC2 Fleet expires. Defaults to `false`. */
    terminate_instances_with_expiration?: any;
    /** (Optional) The type of request. Indicates whether the EC2 Fleet only requests the target capacity, or also attempts to maintain it. Valid values: `maintain`, `request`, `instant`. Defaults to `maintain`. */
    type?:                                any;
    /** (Optional) The start date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). The default is to start fulfilling the request immediately. */
    valid_from?:                          any;
    /** (Optional) The end date and time of the request, in UTC format (for example, YYYY-MM-DDTHH:MM:SSZ). At this point, no new EC2 Fleet requests are placed or able to fulfill the request. If no value is specified, the request remains until you cancel it. */
    valid_until?:                         any;
    /** (Optional) Nested argument containing maintenance strategies for managing your Spot Instances that are at an elevated risk of being interrupted. Defined below. */
    maintenance_strategies?:              MaintenanceStrategies;
    /** (Optional) Nested argument containing the capacity rebalance for your fleet request. Defined below. */
    capacity_rebalance?:                  CapacityRebalance;
}

export interface CapacityRebalance {
    /** (Optional) The replacement strategy to use. Only available for fleets of `type` set to `maintain`. Valid values: `launch`. */
    replacement_strategy: any;
}

export interface LaunchTemplateConfig {
    /** (Optional) Nested argument containing EC2 Launch Template to use. Defined below. */
    launch_template_specification?:                    any;
    /** (Optional) Nested argument(s) containing parameters to override the same parameters in the Launch Template. Defined below. */
    override?:                                         any;
    /** (Optional) The ID of the launch template. */
    launch_template_id?:                               any;
    /** (Optional) The name of the launch template. */
    launch_template_name?:                             any;
    /** (Required) The launch template version number, `$Latest`, or `$Default.` */
    version:                                           any;
    /** (Optional) Availability Zone in which to launch the instances. */
    availability_zone?:                                any;
    /** (Optional) Override the instance type in the Launch Template with instance types that satisfy the requirements. */
    instance_requirements?:                            any;
    /** (Optional) Instance type. */
    instance_type?:                                    any;
    /** (Optional) Maximum price per unit hour that you are willing to pay for a Spot Instance. */
    max_price?:                                        any;
    /** (Optional) Priority for the launch template override. If `on_demand_options` `allocation_strategy` is set to `prioritized`, EC2 Fleet uses priority to determine which launch template override to use first in fulfilling On-Demand capacity. The highest priority is launched first. The lower the number, the higher the priority. If no number is set, the launch template override has the lowest priority. Valid values are whole numbers starting at 0. */
    priority?:                                         any;
    /** (Optional) ID of the subnet in which to launch the instances. */
    subnet_id?:                                        any;
    /** (Optional) Number of units provided by the specified instance type. */
    weighted_capacity?:                                any;
    /** (Optional) Block describing the minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips). Default is no minimum or maximum limits. */
    accelerator_count?:                                any;
    /** (Required) The minimum number of vCPUs. To specify no minimum limit, specify `0`. */
    min:                                               any;
    /** (Optional) The maximum number of vCPUs. To specify no maximum limit, omit this parameter. */
    max?:                                              any;
    /** (Optional) List of accelerator manufacturer names. Default is any manufacturer. */
    accelerator_manufacturers?:                        any;
    /** (Optional) List of accelerator names. Default is any acclerator. */
    accelerator_names?:                                any;
    /** (Optional) Block describing the minimum and maximum total memory of the accelerators. Default is no minimum or maximum. */
    accelerator_total_memory_mib?:                     any;
    /** (Optional) The accelerator types that must be on the instance type. Default is any accelerator type. */
    accelerator_types?:                                any;
    /** (Optional) The instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes. You can use strings with one or more wild cards,represented by an asterisk (\*). The following are examples: `c5*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are excluding all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is no excluded instance types. Default is any instance type. */
    allowed_instance_types?:                           any;
    /** (Optional) Indicate whether bare metal instace types should be `included`, `excluded`, or `required`. Default is `excluded`. */
    bare_metal?:                                       any;
    /** (Optional) Block describing the minimum and maximum baseline EBS bandwidth, in Mbps. Default is no minimum or maximum. */
    baseline_ebs_bandwidth_mbps?:                      any;
    /** (Optional) Indicates whether burstable performance T instance types are `included`, `excluded`, or `required`. Default is `excluded`. */
    burstable_performance?:                            any;
    /** (Optional) The instance types to exclude. You can use strings with one or more wild cards, represented by an asterisk (\*). The following are examples: `c5*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are excluding all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is no excluded instance types. */
    excluded_instance_types?:                          any;
    /** (Optional) Indicates whether current or previous generation instance types are included. The current generation instance types are recommended for use. Valid values are `current` and `previous`. Default is `current` and `previous` generation instance types. */
    instance_generations?:                             any;
    /** (Optional) Indicate whether instance types with local storage volumes are `included`, `excluded`, or `required`. Default is `included`. */
    local_storage?:                                    any;
    /** (Optional) List of local storage type names. Valid values are `hdd` and `ssd`. Default any storage type. */
    local_storage_types?:                              any;
    /** (Optional) Block describing the minimum and maximum amount of memory (GiB) per vCPU. Default is no minimum or maximum. */
    memory_gib_per_vcpu?:                              any;
    /** (Required) The minimum and maximum amount of memory per vCPU, in GiB. Default is no minimum or maximum limits. */
    memory_mib:                                        any;
    /** (Optional) The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps). Default is No minimum or maximum. */
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
    /** (Required) Block describing the minimum and maximum number of vCPUs. Default is no maximum. */
    vcpu_count:                                        any;
}

export interface MaintenanceStrategies {
    /** (Optional) Nested argument containing the capacity rebalance for your fleet request. Defined below. */
    capacity_rebalance: any;
}

export interface OnDemandOptions {
    /** (Optional) How to allocate the target capacity across the Spot pools. Valid values: `diversified`, `lowestPrice`, `capacity-optimized`, `capacity-optimized-prioritized` and `price-capacity-optimized`. Default: `lowestPrice`. */
    allocation_strategy:      any;
    /** (Optional) Indicates whether to use unused Capacity Reservations for fulfilling On-Demand capacity. Valid values: `use-capacity-reservations-first`. */
    usage_strategy:           any;
    /** (Optional) The maximum amount per hour for Spot Instances that you're willing to pay. */
    max_total_price:          any;
    /** (Optional) The minimum target capacity for Spot Instances in the fleet. If the minimum target capacity is not reached, the fleet launches no instances. Supported only for fleets of type `instant`. */
    min_target_capacity:      any;
    /** (Optional) Indicates that the fleet launches all Spot Instances into a single Availability Zone. Supported only for fleets of type `instant`. */
    single_availability_zone: any;
    /** (Optional) Indicates that the fleet uses a single instance type to launch all Spot Instances in the fleet. Supported only for fleets of type `instant`. */
    single_instance_type:     any;
}

export interface SpotOptions {
    /** (Optional) How to allocate the target capacity across the Spot pools. Valid values: `diversified`, `lowestPrice`, `capacity-optimized`, `capacity-optimized-prioritized` and `price-capacity-optimized`. Default: `lowestPrice`. */
    allocation_strategy:            any;
    /** (Optional) Behavior when a Spot Instance is interrupted. Valid values: `hibernate`, `stop`, `terminate`. Default: `terminate`. */
    instance_interruption_behavior: any;
    /** (Optional) Number of Spot pools across which to allocate your target Spot capacity. Valid only when Spot `allocation_strategy` is set to `lowestPrice`. Default: `1`. */
    instance_pools_to_use_count:    any;
    /** (Optional) Nested argument containing maintenance strategies for managing your Spot Instances that are at an elevated risk of being interrupted. Defined below. */
    maintenance_strategies:         any;
    /** (Optional) The maximum amount per hour for Spot Instances that you're willing to pay. */
    max_total_price:                any;
    /** (Optional) The minimum target capacity for Spot Instances in the fleet. If the minimum target capacity is not reached, the fleet launches no instances. Supported only for fleets of type `instant`. */
    min_target_capacity:            any;
    /** (Optional) Indicates that the fleet launches all Spot Instances into a single Availability Zone. Supported only for fleets of type `instant`. */
    single_availability_zone:       any;
    /** (Optional) Indicates that the fleet uses a single instance type to launch all Spot Instances in the fleet. Supported only for fleets of type `instant`. */
    single_instance_type:           any;
}

export interface TargetCapacitySpecification {
    /** (Required) Default target capacity type. Valid values: `on-demand`, `spot`. */
    default_target_capacity_type: any;
    /** (Optional) The number of On-Demand units to request. */
    on_demand_target_capacity?:   any;
    /** (Optional) The number of Spot units to request. */
    spot_target_capacity?:        any;
    /** (Optional) The unit for the target capacity. */
    target_capacity_unit_type?:   any;
    /** (Required) The number of units to request, filled using `default_target_capacity_type`. */
    total_target_capacity:        any;
}