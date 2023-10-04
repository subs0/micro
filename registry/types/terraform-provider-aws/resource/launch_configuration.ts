export interface LaunchConfiguration {
    resource: Resource[];
}

export interface Resource {
    launch_configuration: LaunchConfigurationClass;
}

export interface LaunchConfigurationClass {
    /** (Required) The EC2 image ID to launch. */
    image_id:                     any;
    /** (Required) The size of instance to launch. */
    instance_type:                any;
    /** (Optional) Associate a public ip address with an instance in a VPC. */
    associate_public_ip_address?: any;
    /** (Optional) Additional EBS block devices to attach to the instance. See [Block Devices](#block-devices) below for details. */
    ebs_block_device?:            any;
    /** (Optional) If true, the launched EC2 instance will be EBS-optimized. */
    ebs_optimized?:               any;
    /** (Optional) Enables/disables detailed monitoring. This is enabled by default. */
    enable_monitoring?:           any;
    /** (Optional) Customize Ephemeral (also known as "Instance Store") volumes on the instance. See [Block Devices](#block-devices) below for details. */
    ephemeral_block_device?:      any;
    /** (Optional) The name attribute of the IAM instance profile to associate with launched instances. */
    iam_instance_profile?:        any;
    /** (Optional) The key name that should be used for the instance. */
    key_name?:                    any;
    /** The metadata options for the instance. */
    metadata_options?:            any;
    /** The state of the metadata service: `enabled`, `disabled`. */
    http_endpoint?:               any;
    /** If session tokens are required: `optional`, `required`. */
    http_tokens?:                 any;
    /** The desired HTTP PUT response hop limit for instance metadata requests. */
    http_put_response_hop_limit?: any;
    /** (Optional) The name of the launch configuration. If you leave this blank, Terraform will auto-generate a unique name. Conflicts with `name_prefix`. */
    name?:                        any;
    /** (Optional) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:                 any;
    /** (Optional) A list of associated security group IDS. */
    security_groups?:             any;
    /** (Optional) The tenancy of the instance. Valid values are `default` or `dedicated`, see [AWS's Create Launch Configuration](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html) for more details. */
    placement_tenancy?:           any;
    /** (Optional) Customize details about the root block device of the instance. See [Block Devices](#block-devices) below for details. */
    root_block_device?:           any;
    /** (Optional; Default: On-demand price) The maximum price to use for reserving spot instances. */
    spot_price?:                  any;
    /** (Optional) The user data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead. */
    user_data?:                   any;
    /** (Optional) Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption. */
    user_data_base64?:            any;
}