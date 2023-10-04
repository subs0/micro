export interface OpsworksCustomLayer {
    resource: Resource[];
}

export interface Resource {
    opsworks_custom_layer: OpsworksCustomLayerClass;
}

export interface OpsworksCustomLayerClass {
    /** (Required) A human-readable name for the layer. */
    name:                         any;
    /** (Required) A short, machine-readable name for the layer, which will be used to identify it in the Chef node JSON. */
    short_name:                   any;
    /** (Required) ID of the stack the layer will belong to. */
    stack_id:                     any;
    /** (Optional) Whether to automatically assign an elastic IP address to the layer's instances. */
    auto_assign_elastic_ips?:     any;
    /** (Optional) For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances. */
    auto_assign_public_ips?:      any;
    /** (Optional) Will create an EBS volume and connect it to the layer's instances. See [Cloudwatch Configuration](#cloudwatch-configuration). */
    cloudwatch_configuration?:    any;
    /** (Optional) The ARN of an IAM profile that will be used for the layer's instances. */
    custom_instance_profile_arn?: any;
    /** (Optional) Ids for a set of security groups to apply to the layer's instances. */
    custom_security_group_ids?:   any;
    /** (Optional) Whether to enable auto-healing for the layer. */
    auto_healing?:                any;
    /** (Optional) Whether to install OS and package updates on each instance when it boots. */
    install_updates_on_boot?:     any;
    /** (Optional) The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event. */
    instance_shutdown_timeout?:   any;
    /** (Optional) Name of an Elastic Load Balancer to attach to this layer */
    elastic_load_balancer?:       any;
    /** (Optional) Whether to enable Elastic Load Balancing connection draining. */
    drain_elb_on_shutdown?:       any;
    /** (Optional) Load-based auto scaling configuration. See [Load Based AutoScaling](#load-based-autoscaling) */
    load_based_auto_scaling?:     any;
    /** (Optional) Names of a set of system packages to install on the layer's instances. */
    system_packages?:             any;
    /** (Optional) Whether to use EBS-optimized instances. */
    use_ebs_optimized_instances?: any;
    /** (Optional) Will create an EBS volume and connect it to the layer's instances. See [EBS Volume](#ebs-volume). */
    ebs_volume?:                  any;
    /** (Optional) Custom JSON attributes to apply to the layer. */
    custom_json?:                 any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
    /** (Required) The path to mount the EBS volume on the layer's instances. */
    mount_point:                  any;
    /** (Required) The size of the volume in gigabytes. */
    size:                         any;
    /** (Required) The number of disks to use for the EBS volume. */
    number_of_disks:              any;
    /** (Required) The RAID level to use for the volume. */
    raid_level:                   any;
    /** (Optional) The type of volume to create. This may be `standard` (the default), `io1` or `gp2`. */
    type?:                        any;
    /** (Optional) For PIOPS volumes, the IOPS per disk. */
    iops?:                        any;
    /** (Optional) Encrypt the volume. */
    encrypted?:                   any;
    /** (Optional) */
    enabled?:                     any;
    /** (Optional) A block the specifies how an opsworks logs look like. See [Log Streams](#log-streams). */
    log_streams?:                 any;
    /** (Required) Specifies log files that you want to push to CloudWatch Logs. File can point to a specific file or multiple files (by using wild card characters such as /var/log/system.log*). */
    file:                         any;
    /** (Required) Specifies the destination log group. A log group is created automatically if it doesn't already exist. */
    log_group_name:               any;
    /** (Optional) Specifies the max number of log events in a batch, up to `10000`. The default value is `1000`. */
    batch_count?:                 any;
    /** (Optional) Specifies the maximum size of log events in a batch, in bytes, up to `1048576` bytes. The default value is `32768` bytes. */
    batch_size?:                  any;
    /** (Optional) Specifies the time duration for the batching of log events. The minimum value is `5000` and default value is `5000`. */
    buffer_duration?:             any;
    /** (Optional) Specifies how the timestamp is extracted from logs. For more information, see the CloudWatch Logs Agent Reference (https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html). */
    datetime_format?:             any;
    /** (Optional) Specifies the encoding of the log file so that the file can be read correctly. The default is `utf_8`. */
    encoding?:                    any;
    /** (Optional) Specifies the range of lines for identifying a file. The valid values are one number, or two dash-delimited numbers, such as `1`, `2-5`. The default value is `1`. */
    file_fingerprint_lines?:      any;
    /** (Optional) Specifies where to start to read data (`start_of_file` or `end_of_file`). The default is `start_of_file`. */
    initial_position?:            any;
    /** (Optional) Specifies the pattern for identifying the start of a log message. */
    multiline_start_pattern?:     any;
    /** (Optional) Specifies the time zone of log event time stamps. */
    time_zone?:                   any;
    /** (Optional) The downscaling settings, as defined below, used for load-based autoscaling */
    downscaling?:                 any;
    /** (Optional) Whether load-based auto scaling is enabled for the layer. */
    enable?:                      any;
    /** (Optional) The upscaling settings, as defined below, used for load-based autoscaling */
    upscaling?:                   any;
    /** (Optional) Custom Cloudwatch auto scaling alarms, to be used as thresholds. This parameter takes a list of up to five alarm names, which are case sensitive and must be in the same region as the stack. */
    alarms?:                      any;
    /** (Optional) The CPU utilization threshold, as a percent of the available CPU. A value of -1 disables the threshold. */
    cpu_threshold?:               any;
    /** (Optional) The amount of time (in minutes) after a scaling event occurs that AWS OpsWorks Stacks should ignore metrics and suppress additional scaling events. */
    ignore_metrics_time?:         any;
    /** (Optional) The number of instances to add or remove when the load exceeds a threshold. */
    instance_count?:              any;
    /** (Optional) The load threshold. A value of -1 disables the threshold. */
    load_threshold?:              any;
    /** (Optional) The memory utilization threshold, as a percent of the available memory. A value of -1 disables the threshold. */
    memory_threshold?:            any;
    /** (Optional) The amount of time, in minutes, that the load must exceed a threshold before more instances are added or removed. */
    thresholds_wait_time?:        any;
}