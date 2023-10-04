export interface OpsworksInstance {
    resource: Resource[];
}

export interface Resource {
    opsworks_instance: OpsworksInstanceClass;
}

export interface OpsworksInstanceClass {
    /** (Required) List of the layers the instance will belong to. */
    layer_ids:                any;
    /** (Required) Identifier of the stack the instance will belong to. */
    stack_id:                 any;
    /** (Optional) OpsWorks agent to install. Default is `INHERIT`. */
    agent_version?:           any;
    /** (Optional) AMI to use for the instance.  If an AMI is specified, `os` must be `Custom`. */
    ami_id?:                  any;
    /** (Optional) Machine architecture for created instances.  Valid values are `x86_64` or `i386`. The default is `x86_64`. */
    architecture?:            any;
    /** (Optional) Creates load-based or time-based instances.  Valid values are `load`, `timer`. */
    auto_scaling_type?:       any;
    /** (Optional) Name of the availability zone where instances will be created by default. */
    availability_zone?:       any;
    /** (Optional) Whether to delete EBS volume on deletion. Default is `true`. */
    delete_ebs?:              any;
    /** (Optional) Whether to delete the Elastic IP on deletion. */
    delete_eip?:              any;
    /** (Optional) Configuration block for additional EBS block devices to attach to the instance. See [Block Devices](#block-devices) below. */
    ebs_block_device?:        any;
    /** (Optional) Whether the launched EC2 instance will be EBS-optimized. */
    ebs_optimized?:           any;
    /** (Optional) ECS cluster's ARN for container instances. */
    ecs_cluster_arn?:         any;
    /** (Optional) Instance Elastic IP address. */
    elastic_ip?:              any;
    /** (Optional) Configuration block for ephemeral (also known as "Instance Store") volumes on the instance. See [Block Devices](#block-devices) below. */
    ephemeral_block_device?:  any;
    /** (Optional) Instance's host name. */
    hostname?:                any;
    /** (Optional) For registered instances, infrastructure class: ec2 or on-premises. */
    infrastructure_class?:    any;
    /** (Optional) Controls where to install OS and package updates when the instance boots.  Default is `true`. */
    install_updates_on_boot?: any;
    /** (Optional) ARN of the instance's IAM profile. */
    instance_profile_arn?:    any;
    /** (Optional) Type of instance to start. */
    instance_type?:           any;
    /** (Optional) Name of operating system that will be installed. */
    os?:                      any;
    /** (Optional) Configuration block for the root block device of the instance. See [Block Devices](#block-devices) below. */
    root_block_device?:       any;
    /** (Optional) Name of the type of root device instances will have by default. Valid values are `ebs` or `instance-store`. */
    root_device_type?:        any;
    /** (Optional) Name of the SSH keypair that instances will have by default. */
    ssh_key_name?:            any;
    /** (Optional) Desired state of the instance. Valid values are `running` or `stopped`. */
    state?:                   any;
    /** (Optional) Subnet ID to attach to. */
    subnet_id?:               any;
    /** (Optional) Instance tenancy to use. Valid values are `default`, `dedicated` or `host`. */
    tenancy?:                 any;
    /** (Optional) Keyword to choose what virtualization mode created instances will use. Valid values are `paravirtual` or `hvm`. */
    virtualization_type?:     any;
}