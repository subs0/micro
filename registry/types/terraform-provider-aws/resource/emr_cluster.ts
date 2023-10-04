export interface EmrCluster {
    resource: Resource[];
}

export interface Resource {
    emr_cluster: EmrClusterClass;
}

export interface EmrClusterClass {
    /** (Required) Release label for the Amazon EMR release. */
    release_label:                      any;
    /** (Required) IAM role that will be assumed by the Amazon EMR service to access AWS resources. */
    service_role:                       any;
    /** (Optional) JSON string for selecting additional features such as adding proxy information. Note: Currently there is no API to retrieve the value of this argument after EMR cluster creation from provider, therefore Terraform cannot detect drift from the actual EMR cluster if its value is changed outside Terraform. */
    additional_info?:                   any;
    /** (Optional) A case-insensitive list of applications for Amazon EMR to install and configure when launching the cluster. For a list of applications available for each Amazon EMR release version, see the [Amazon EMR Release Guide](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-components.html). */
    applications?:                      any;
    /** (Optional) IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group. */
    autoscaling_role?:                  any;
    auto_termination_policy?:           AutoTerminationPolicy;
    bootstrap_action?:                  BootstrapAction;
    /** (Optional) Configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster. List of `configuration` blocks. */
    configurations?:                    Configurations;
    /** (Optional) JSON string for supplying list of configurations for the EMR cluster. */
    configurations_json?:               any;
    core_instance_fleet?:               CoreInstanceFleet;
    core_instance_group?:               CoreInstanceGroup;
    /** (Optional) Custom Amazon Linux AMI for the cluster (instead of an EMR-owned AMI). Available in Amazon EMR version 5.7.0 and later. */
    custom_ami_id?:                     any;
    /** (Optional) Size in GiB of the EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later. */
    ebs_root_volume_size?:              any;
    ec2_attributes?:                    Ec2Attributes;
    /** (Optional) Switch on/off run cluster with no steps or when all steps are complete (default is on) */
    keep_job_flow_alive_when_no_steps?: any;
    kerberos_attributes?:               KerberosAttributes;
    /** (Optional) List of [step states](https://docs.aws.amazon.com/emr/latest/APIReference/API_StepStatus.html) used to filter returned steps */
    list_steps_states?:                 any;
    /** (Optional) AWS KMS customer master key (CMK) key ID or arn used for encrypting log files. This attribute is only available with EMR version 5.30.0 and later, excluding EMR 6.0.0. */
    log_encryption_kms_key_id?:         any;
    /** (Optional) S3 bucket to write the log files of the job flow. If a value is not provided, logs are not created. */
    log_uri?:                           any;
    master_instance_fleet?:             MasterInstanceFleet;
    master_instance_group?:             MasterInstanceGroup;
    placement_group_config?:            PlacementGroupConfig;
    /** (Optional) Way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an `instance group` is resized. */
    scale_down_behavior?:               any;
    /** (Optional) Security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater. */
    security_configuration?:            any;
    step?:                              Step;
    /** (Optional) Number of steps that can be executed concurrently. You can specify a maximum of 256 steps. Only valid for EMR clusters with `release_label` 5.28.0 or greater (default is 1). */
    step_concurrency_level?:            any;
    /** (Optional) list of tags to apply to the EMR Cluster. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                              any;
    /** (Optional) Switch on/off termination protection (default is `false`, except when using multiple master nodes). Before attempting to destroy the resource when termination protection is enabled, this configuration must be applied with its value set to `false`. */
    termination_protection?:            any;
    /** (Optional) Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default value is `true`. */
    visible_to_all_users?:              any;
}

export interface AutoTerminationPolicy {
    /** (Optional) Specifies the amount of idle time in seconds after which the cluster automatically terminates. You can specify a minimum of `60` seconds and a maximum of `604800` seconds (seven days). */
    idle_timeout: any;
}

export interface BootstrapAction {
    /** (Optional) List of command line arguments passed to the JAR file's main function when executed. */
    args: any;
    /** (Required) Name of the step. */
    name: any;
    /** (Required) Location of the script to run during a bootstrap action. Can be either a location in Amazon S3 or on a local file system. */
    path: any;
}

export interface Configurations {
    /** (Optional) Classification within a configuration. */
    classification: any;
    /** (Optional) Key-Value map of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function. */
    properties:     any;
}

export interface CoreInstanceFleet {
    /** (Optional) Configuration block for instance fleet. */
    instance_type_configs:                      any;
    /** (Optional) Configuration block for launch specification. */
    launch_specifications:                      any;
    /** (Required) Name of the step. */
    name:                                       any;
    /** (Optional) Target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision. */
    target_on_demand_capacity:                  any;
    /** (Optional) Target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision. */
    target_spot_capacity:                       any;
    /** (Optional) Bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances. */
    bid_price:                                  any;
    /** (Optional) Bid price, as a percentage of On-Demand price, for each EC2 Spot instance as defined by `instance_type`. Expressed as a number (for example, 20 specifies 20%). If neither `bid_price` nor `bid_price_as_percentage_of_on_demand_price` is provided, `bid_price_as_percentage_of_on_demand_price` defaults to 100%. */
    bid_price_as_percentage_of_on_demand_price: any;
    /** (Optional) Configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster. List of `configuration` blocks. */
    configurations:                             any;
    /** (Optional) Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below. */
    ebs_config:                                 any;
    /** (Required) EC2 instance type for all instances in the instance group. */
    instance_type:                              any;
    /** (Optional) Number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in `aws_emr_instance_fleet`. */
    weighted_capacity:                          any;
    /** (Optional) Configuration block for on demand instances launch specifications. */
    on_demand_specification:                    any;
    /** (Optional) Configuration block for spot instances launch specifications. */
    spot_specification:                         any;
    /** (Required) Specifies the strategy to use in launching Spot instance fleets. Valid values include `capacity-optimized`, `diversified`, `lowest-price`, `price-capacity-optimized`. See the [AWS documentation](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html#emr-instance-fleet-allocation-strategy) for details on each strategy type. */
    allocation_strategy:                        any;
    /** (Optional) Defined duration for Spot instances (also known as Spot blocks) in minutes. When specified, the Spot instance does not terminate before the defined duration expires, and defined duration pricing for Spot instances applies. Valid values are 60, 120, 180, 240, 300, or 360. The duration period starts as soon as a Spot instance receives its instance ID. At the end of the duration, Amazon EC2 marks the Spot instance for termination and provides a Spot instance termination notice, which gives the instance a two-minute warning before it terminates. */
    block_duration_minutes:                     any;
    /** (Required) Action to take when TargetSpotCapacity has not been fulfilled when the TimeoutDurationMinutes has expired; that is, when all Spot instances could not be provisioned within the Spot provisioning timeout. Valid values are `TERMINATE_CLUSTER` and `SWITCH_TO_ON_DEMAND`. SWITCH_TO_ON_DEMAND specifies that if no Spot instances are available, On-Demand Instances should be provisioned to fulfill any remaining Spot capacity. */
    timeout_action:                             any;
    /** (Required) Spot provisioning timeout period in minutes. If Spot instances are not provisioned within this time period, the TimeOutAction is taken. Minimum value is 5 and maximum value is 1440. The timeout applies only during initial provisioning, when the cluster is first created. */
    timeout_duration_minutes:                   any;
}

export interface CoreInstanceGroup {
    /** (Optional) String containing the [EMR Auto Scaling Policy](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html) JSON. */
    autoscaling_policy:   any;
    /** (Optional) Bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances. */
    bid_price:            any;
    /** (Optional) Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below. */
    ebs_config:           any;
    /** (Optional) Target number of instances for the instance group. Must be 1 or 3. Defaults to 1. Launching with multiple master nodes is only supported in EMR version 5.23.0+, and requires this resource's `core_instance_group` to be configured. Public (Internet accessible) instances must be created in VPC subnets that have [map public IP on launch](/docs/providers/aws/r/subnet.html#map_public_ip_on_launch) enabled. Termination protection is automatically enabled when launched with multiple master nodes and Terraform must have the `termination_protection = false` configuration applied before destroying this resource. */
    instance_count:       any;
    /** (Required) EC2 instance type for all instances in the instance group. */
    instance_type:        any;
    /** (Required) Name of the step. */
    name:                 any;
    /** (Optional) Number of I/O operations per second (IOPS) that the volume supports. */
    iops:                 any;
    /** (Required) Volume size, in gibibytes (GiB). */
    size:                 any;
    /** (Required) Volume type. Valid options are `gp3`, `gp2`, `io1`, `standard`, `st1` and `sc1`. See [EBS Volume Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html). */
    type:                 any;
    /** (Optional) The throughput, in mebibyte per second (MiB/s). */
    throughput:           any;
    /** (Optional) Number of EBS volumes with this configuration to attach to each EC2 instance in the instance group (default is 1). */
    volumes_per_instance: any;
}

export interface Ec2Attributes {
    /** (Optional) String containing a comma separated list of additional Amazon EC2 security group IDs for the master node. */
    additional_master_security_groups: any;
    /** (Optional) String containing a comma separated list of additional Amazon EC2 security group IDs for the slave nodes as a comma separated string. */
    additional_slave_security_groups:  any;
    /** (Optional) Identifier of the Amazon EC2 EMR-Managed security group for the master node. */
    emr_managed_master_security_group: any;
    /** (Optional) Identifier of the Amazon EC2 EMR-Managed security group for the slave nodes. */
    emr_managed_slave_security_group:  any;
    /** (Required) Instance Profile for EC2 instances of the cluster assume this role. */
    instance_profile:                  any;
    /** (Optional) Amazon EC2 key pair that can be used to ssh to the master node as the user called `hadoop`. */
    key_name:                          any;
    /** (Optional) Identifier of the Amazon EC2 service-access security group - required when the cluster runs on a private subnet. */
    service_access_security_group:     any;
    /** (Optional) VPC subnet id where you want the job flow to launch. Cannot specify the `cc1.4xlarge` instance type for nodes of a job flow launched in an Amazon VPC. */
    subnet_id:                         any;
    /** (Optional) List of VPC subnet id-s where you want the job flow to launch.  Amazon EMR identifies the best Availability Zone to launch instances according to your fleet specifications. */
    subnet_ids:                        any;
}

export interface KerberosAttributes {
    /** (Optional) Active Directory password for `ad_domain_join_user`. Terraform cannot perform drift detection of this configuration. */
    ad_domain_join_password:              any;
    /** (Optional) Required only when establishing a cross-realm trust with an Active Directory domain. A user with sufficient privileges to join resources to the domain. Terraform cannot perform drift detection of this configuration. */
    ad_domain_join_user:                  any;
    /** (Optional) Required only when establishing a cross-realm trust with a KDC in a different realm. The cross-realm principal password, which must be identical across realms. Terraform cannot perform drift detection of this configuration. */
    cross_realm_trust_principal_password: any;
    /** (Required) Password used within the cluster for the kadmin service on the cluster-dedicated KDC, which maintains Kerberos principals, password policies, and keytabs for the cluster. Terraform cannot perform drift detection of this configuration. */
    kdc_admin_password:                   any;
    /** (Required) Name of the Kerberos realm to which all nodes in a cluster belong. For example, `EC2.INTERNAL` */
    realm:                                any;
}

export interface MasterInstanceFleet {
    /** (Optional) Configuration block for instance fleet. */
    instance_type_configs:     any;
    /** (Optional) Configuration block for launch specification. */
    launch_specifications:     any;
    /** (Required) Name of the step. */
    name:                      any;
    /** (Optional) Target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision. */
    target_on_demand_capacity: any;
    /** (Optional) Target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision. */
    target_spot_capacity:      any;
}

export interface MasterInstanceGroup {
    /** (Optional) Bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances. */
    bid_price:      any;
    /** (Optional) Configuration block(s) for EBS volumes attached to each instance in the instance group. Detailed below. */
    ebs_config:     any;
    /** (Optional) Target number of instances for the instance group. Must be 1 or 3. Defaults to 1. Launching with multiple master nodes is only supported in EMR version 5.23.0+, and requires this resource's `core_instance_group` to be configured. Public (Internet accessible) instances must be created in VPC subnets that have [map public IP on launch](/docs/providers/aws/r/subnet.html#map_public_ip_on_launch) enabled. Termination protection is automatically enabled when launched with multiple master nodes and Terraform must have the `termination_protection = false` configuration applied before destroying this resource. */
    instance_count: any;
    /** (Required) EC2 instance type for all instances in the instance group. */
    instance_type:  any;
    /** (Required) Name of the step. */
    name:           any;
}

export interface PlacementGroupConfig {
    /** (Required) Role of the instance in the cluster. Valid Values: `MASTER`, `CORE`, `TASK`. */
    instance_role:      any;
    /** (Optional) EC2 Placement Group strategy associated with instance role. Valid Values: `SPREAD`, `PARTITION`, `CLUSTER`, `NONE`. */
    placement_strategy: any;
}

export interface Step {
    /** (Required) Action to take if the step fails. Valid values: `TERMINATE_JOB_FLOW`, `TERMINATE_CLUSTER`, `CANCEL_AND_WAIT`, and `CONTINUE` */
    action_on_failure: any;
    /** (Required) JAR file used for the step. See below. */
    hadoop_jar_step:   any;
    /** (Required) Name of the step. */
    name:              any;
    /** (Optional) List of command line arguments passed to the JAR file's main function when executed. */
    args:              any;
    /** (Required) Path to a JAR file run during the step. */
    jar:               any;
    /** (Optional) Name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file. */
    main_class:        any;
    /** (Optional) Key-Value map of Java properties that are set when the step runs. You can use these properties to pass key value pairs to your main function. */
    properties:        any;
}