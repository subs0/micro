export interface AutoscalingGroup {
    resource: Resource[];
}

export interface Resource {
    autoscaling_group: AutoscalingGroupClass;
}

export interface AutoscalingGroupClass {
    "This resource supports the following arguments:"?: any;
    /** 

~> **NOTE:** Either `id` or `name` must be specified.

The top-level `launch_template` block supports the following:

- `id` - (Optional) ID of the launch template. Conflicts with `name`.
- `name` - (Optional) Name of the launch template. Conflicts with `id`.
- `version` - (Optional) Template version. Can be version number, `$Latest`, or `$Default`. (Default: `$Default`). */
    launch_template?:                                   any;
    /** 

- `instances_distribution` - (Optional) Nested argument containing settings on how to mix on-demand and Spot instances in the Auto Scaling group. Defined below.
- `launch_template` - (Required) Nested argument containing launch template settings along with the overrides to specify multiple instance types and weights. Defined below.

#### mixed_instances_policy instances_distribution

This configuration block supports the following:

- `on_demand_allocation_strategy` - (Optional) Strategy to use when launching on-demand instances. Valid values: `prioritized`, `lowest-price`. Default: `prioritized`.
- `on_demand_base_capacity` - (Optional) Absolute minimum amount of desired capacity that must be fulfilled by on-demand instances. Default: `0`.
- `on_demand_percentage_above_base_capacity` - (Optional) Percentage split between on-demand and Spot instances above the base on-demand capacity. Default: `100`.
- `spot_allocation_strategy` - (Optional) How to allocate capacity across the Spot pools. Valid values: `lowest-price`, `capacity-optimized`, `capacity-optimized-prioritized`, and `price-capacity-optimized`. Default: `lowest-price`.
- `spot_instance_pools` - (Optional) Number of Spot pools per availability zone to allocate capacity. EC2 Auto Scaling selects the cheapest Spot pools and evenly allocates Spot capacity across the number of Spot pools that you specify. Only available with `spot_allocation_strategy` set to `lowest-price`. Otherwise it must be set to `0`, if it has been defined before. Default: `2`.
- `spot_max_price` - (Optional) Maximum price per unit hour that the user is willing to pay for the Spot instances. Default: an empty string which means the on-demand price.

#### mixed_instances_policy launch_template

This configuration block supports the following:

- `launch_template_specification` - (Required) Nested argument defines the Launch Template. Defined below.
- `override` - (Optional) List of nested arguments provides the ability to specify multiple instance types. This will override the same parameter in the launch template. For on-demand instances, Auto Scaling considers the order of preference of instance types to launch based on the order specified in the overrides list. Defined below.

##### mixed_instances_policy launch_template launch_template_specification

~> **NOTE:** Either `launch_template_id` or `launch_template_name` must be specified.

This configuration block supports the following:

- `launch_template_id` - (Optional) ID of the launch template. Conflicts with `launch_template_name`.
- `launch_template_name` - (Optional) Name of the launch template. Conflicts with `launch_template_id`.
- `version` - (Optional) Template version. Can be version number, `$Latest`, or `$Default`. (Default: `$Default`).

##### mixed_instances_policy launch_template override

This configuration block supports the following:

- `instance_type` - (Optional) Override the instance type in the Launch Template.
- `instance_requirements` - (Optional) Override the instance type in the Launch Template with instance types that satisfy the requirements.
- `launch_template_specification` - (Optional) Override the instance launch template specification in the Launch Template.
- `weighted_capacity` - (Optional) Number of capacity units, which gives the instance type a proportional weight to other instance types.

###### mixed_instances_policy launch_template override instance_requirements

This configuration block supports the following:

~> **NOTE:** Both `memory_mib.min` and `vcpu_count.min` must be specified.

- `accelerator_count` - (Optional) Block describing the minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips). Default is no minimum or maximum.
    - `min` - (Optional) Minimum.
    - `max` - (Optional) Maximum. Set to `0` to exclude instance types with accelerators.
- `accelerator_manufacturers` - (Optional) List of accelerator manufacturer names. Default is any manufacturer.

  ```
  Valid names:
    * amazon-web-services
    * amd
    * nvidia
    * xilinx
  ```

- `accelerator_names` - (Optional) List of accelerator names. Default is any acclerator.

  ```
  Valid names:
    * a100            - NVIDIA A100 GPUs
    * v100            - NVIDIA V100 GPUs
    * k80             - NVIDIA K80 GPUs
    * t4              - NVIDIA T4 GPUs
    * m60             - NVIDIA M60 GPUs
    * radeon-pro-v520 - AMD Radeon Pro V520 GPUs
    * vu9p            - Xilinx VU9P FPGAs
  ```

- `accelerator_total_memory_mib` - (Optional) Block describing the minimum and maximum total memory of the accelerators. Default is no minimum or maximum.

    - `min` - (Optional) Minimum.
    - `max` - (Optional) Maximum.

- `accelerator_types` - (Optional) List of accelerator types. Default is any accelerator type.

  ```
  Valid types:
    * fpga
    * gpu
    * inference
  ```

- `allowed_instance_types` - (Optional) List of instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes. You can use strings with one or more wild cards, represented by an asterisk (\*), to allow an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are allowing the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are allowing all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is all instance types.

  ~> **NOTE:** If you specify `allowed_instance_types`, you can't specify `excluded_instance_types`.

- `bare_metal` - (Optional) Indicate whether bare metal instace types should be `included`, `excluded`, or `required`. Default is `excluded`.
- `baseline_ebs_bandwidth_mbps` - (Optional) Block describing the minimum and maximum baseline EBS bandwidth, in Mbps. Default is no minimum or maximum.
    - `min` - (Optional) Minimum.
    - `max` - (Optional) Maximum.
- `burstable_performance` - (Optional) Indicate whether burstable performance instance types should be `included`, `excluded`, or `required`. Default is `excluded`.
- `cpu_manufacturers` (Optional) List of CPU manufacturer names. Default is any manufacturer.

  ~> **NOTE:** Don't confuse the CPU hardware manufacturer with the CPU hardware architecture. Instances will be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you specify in your launch template.

  ```
  Valid names:
    * amazon-web-services
    * amd
    * intel
  ```

- `excluded_instance_types` - (Optional) List of instance types to exclude. You can use strings with one or more wild cards, represented by an asterisk (\*), to exclude an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are excluding all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is no excluded instance types.

  ~> **NOTE:** If you specify `excluded_instance_types`, you can't specify `allowed_instance_types`.

- `instance_generations` - (Optional) List of instance generation names. Default is any generation.

  ```
  Valid names:
    * current  - Recommended for best performance.
    * previous - For existing applications optimized for older instance types.
  ```

- `local_storage` - (Optional) Indicate whether instance types with local storage volumes are `included`, `excluded`, or `required`. Default is `included`.
- `local_storage_types` - (Optional) List of local storage type names. Default any storage type.

  ```
  Value names:
    * hdd - hard disk drive
    * ssd - solid state drive
  ```

- `memory_gib_per_vcpu` - (Optional) Block describing the minimum and maximum amount of memory (GiB) per vCPU. Default is no minimum or maximum.
    - `min` - (Optional) Minimum. May be a decimal number, e.g. `0.5`.
    - `max` - (Optional) Maximum. May be a decimal number, e.g. `0.5`.
- `memory_mib` - (Required) Block describing the minimum and maximum amount of memory (MiB). Default is no maximum.
    - `min` - (Required) Minimum.
    - `max` - (Optional) Maximum.
- `network_bandwidth_gbps` - (Optional) Block describing the minimum and maximum amount of network bandwidth, in gigabits per second (Gbps). Default is no minimum or maximum.
    - `min` - (Optional) Minimum.
    - `max` - (Optional) Maximum.
- `network_interface_count` - (Optional) Block describing the minimum and maximum number of network interfaces. Default is no minimum or maximum.
    - `min` - (Optional) Minimum.
    - `max` - (Optional) Maximum.
- `on_demand_max_price_percentage_over_lowest_price` - (Optional) Price protection threshold for On-Demand Instances. This is the maximum you’ll pay for an On-Demand Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 20.

  If you set DesiredCapacityType to vcpu or memory-mib, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price.

- `require_hibernate_support` - (Optional) Indicate whether instance types must support On-Demand Instance Hibernation, either `true` or `false`. Default is `false`.
- `spot_max_price_percentage_over_lowest_price` - (Optional) Price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 100.

  If you set DesiredCapacityType to vcpu or memory-mib, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price.

- `total_local_storage_gb` - (Optional) Block describing the minimum and maximum total local storage (GB). Default is no minimum or maximum.
    - `min` - (Optional) Minimum. May be a decimal number, e.g. `0.5`.
    - `max` - (Optional) Maximum. May be a decimal number, e.g. `0.5`.
- `vcpu_count` - (Required) Block describing the minimum and maximum number of vCPUs. Default is no maximum.
    - `min` - (Required) Minimum.
    - `max` - (Optional) Maximum. */
    mixed_instances_policy?:                            any;
    /** 

The `tag` attribute accepts exactly one tag declaration with the following fields:

- `key` - (Required) Key
- `value` - (Required) Value
- `propagate_at_launch` - (Required) Enables propagation of the tag to
  Amazon EC2 instances launched via this ASG

To declare multiple tags, additional `tag` blocks can be specified.

~> **NOTE:** Other AWS APIs may automatically add special tags to their associated Auto Scaling Group for management purposes, such as ECS Capacity Providers adding the `AmazonECSManaged` tag. These generally should be included in the configuration so Terraform does not attempt to remove them and so if the `min_size` was greater than zero on creation, that these tag(s) are applied to any initial EC2 Instances in the Auto Scaling Group. If these tag(s) were missing in the Auto Scaling Group configuration on creation, affected EC2 Instances missing the tags may require manual intervention of adding the tags to ensure they work properly with the other AWS service. */
    tag?:                                               any;
    /** 

This configuration block supports the following:

- `strategy` - (Required) Strategy to use for instance refresh. The only allowed value is `Rolling`. See [StartInstanceRefresh Action](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_StartInstanceRefresh.html#API_StartInstanceRefresh_RequestParameters) for more information.
- `preferences` - (Optional) Override default parameters for Instance Refresh.
    - `checkpoint_delay` - (Optional) Number of seconds to wait after a checkpoint. Defaults to `3600`.
    - `checkpoint_percentages` - (Optional) List of percentages for each checkpoint. Values must be unique and in ascending order. To replace all instances, the final number must be `100`.
    - `instance_warmup` - (Optional) Number of seconds until a newly launched instance is configured and ready to use. Default behavior is to use the Auto Scaling Group's health check grace period.
    - `min_healthy_percentage` - (Optional) Amount of capacity in the Auto Scaling group that must remain healthy during an instance refresh to allow the operation to continue, as a percentage of the desired capacity of the Auto Scaling group. Defaults to `90`.
    - `skip_matching` - (Optional) Replace instances that already have your desired configuration. Defaults to `false`.
    - `auto_rollback` - (Optional) Automatically rollback if instance refresh fails. Defaults to `false`. This option may only be set to `true` when specifying a `launch_template` or `mixed_instances_policy`.
    - `scale_in_protected_instances` - (Optional) Behavior when encountering instances protected from scale in are found. Available behaviors are `Refresh`, `Ignore`, and `Wait`. Default is `Ignore`.
    - `standby_instances` - (Optional) Behavior when encountering instances in the `Standby` state in are found. Available behaviors are `Terminate`, `Ignore`, and `Wait`. Default is `Ignore`.
- `triggers` - (Optional) Set of additional property names that will trigger an Instance Refresh. A refresh will always be triggered by a change in any of `launch_configuration`, `launch_template`, or `mixed_instances_policy`.

~> **NOTE:** A refresh is started when any of the following Auto Scaling Group properties change: `launch_configuration`, `launch_template`, `mixed_instances_policy`. Additional properties can be specified in the `triggers` property of `instance_refresh`.

~> **NOTE:** A refresh will not start when `version = "$Latest"` is configured in the `launch_template` block. To trigger the instance refresh when a launch template is changed, configure `version` to use the `latest_version` attribute of the `aws_launch_template` resource.

~> **NOTE:** Auto Scaling Groups support up to one active instance refresh at a time. When this resource is updated, any existing refresh is cancelled.

~> **NOTE:** Depending on health check settings and group size, an instance refresh may take a long time or fail. This resource does not wait for the instance refresh to complete. */
    instance_refresh?:                                  any;
    /** 

This configuration block supports the following:

- `instance_reuse_policy` - (Optional) Whether instances in the Auto Scaling group can be returned to the warm pool on scale in. The default is to terminate instances in the Auto Scaling group when the group scales in.
- `max_group_prepared_capacity` - (Optional) Total maximum number of instances that are allowed to be in the warm pool or in any state except Terminated for the Auto Scaling group.
- `min_size` - (Optional) Minimum number of instances to maintain in the warm pool. This helps you to ensure that there is always a certain number of warmed instances available to handle traffic spikes. Defaults to 0 if not specified.
- `pool_state` - (Optional) Sets the instance state to transition to after the lifecycle hooks finish. Valid values are: Stopped (default), Running or Hibernated. */
    warm_pool?:                                         any;
    /** 

- `identifier` - Identifies the traffic source. For Application Load Balancers, Gateway Load Balancers, Network Load Balancers, and VPC Lattice, this will be the Amazon Resource Name (ARN) for a target group in this account and Region. For Classic Load Balancers, this will be the name of the Classic Load Balancer in this account and Region.
- `type` - Provides additional context for the value of Identifier.
  The following lists the valid values:
  `elb` if `identifier` is the name of a Classic Load Balancer.
  `elbv2` if `identifier` is the ARN of an Application Load Balancer, Gateway Load Balancer, or Network Load Balancer target group.
  `vpc-lattice` if `identifier` is the ARN of a VPC Lattice target group.

##### instance_reuse_policy

This configuration block supports the following:

- `reuse_on_scale_in` - (Optional) Whether instances in the Auto Scaling group can be returned to the warm pool on scale in. */
    traffic_source?:                                    any;
}