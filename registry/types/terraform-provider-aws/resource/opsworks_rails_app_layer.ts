export interface OpsworksRailsAppLayer {
    resource: Resource[];
}

export interface Resource {
    opsworks_rails_app_layer: OpsworksRailsAppLayerClass;
}

export interface OpsworksRailsAppLayerClass {
    /** (Required) ID of the stack the layer will belong to. */
    stack_id:                     any;
    /** (Optional) A human-readable name for the layer. */
    name?:                        any;
    /** (Optional) Keyword for the app server to use. Defaults to "apache_passenger". */
    app_server?:                  any;
    /** (Optional) Whether to automatically assign an elastic IP address to the layer's instances. */
    auto_assign_elastic_ips?:     any;
    /** (Optional) For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances. */
    auto_assign_public_ips?:      any;
    /** (Optional) When OpsWorks is managing Bundler, which version to use. Defaults to "1.5.3". */
    bundler_version?:             any;
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
    /** (Optional) Whether OpsWorks should manage bundler. On by default. */
    manage_bundler?:              any;
    /** (Optional) The version of Passenger to use. Defaults to "4.0.46". */
    passenger_version?:           any;
    /** (Optional) The version of Ruby to use. Defaults to "2.0.0". */
    ruby_version?:                any;
    /** (Optional) The version of RubyGems to use. Defaults to "2.2.2". */
    rubygems_version?:            any;
    /** (Optional) Names of a set of system packages to install on the layer's instances. */
    system_packages?:             any;
    /** (Optional) Whether to use EBS-optimized instances. */
    use_ebs_optimized_instances?: any;
    /** (Optional) `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances. */
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
}