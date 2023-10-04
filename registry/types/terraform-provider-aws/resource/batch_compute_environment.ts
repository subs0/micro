export interface BatchComputeEnvironment {
    resource: Resource[];
}

export interface Resource {
    batch_compute_environment: BatchComputeEnvironmentClass;
}

export interface BatchComputeEnvironmentClass {
    /** (Optional, Forces new resource) The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, and underscores are allowed. If omitted, Terraform will assign a random, unique name. */
    compute_environment_name?:        any;
    /** (Optional, Forces new resource) Creates a unique compute environment name beginning with the specified prefix. Conflicts with `compute_environment_name`. */
    compute_environment_name_prefix?: any;
    compute_resources?:               ComputeResources;
    eks_configuration?:               EksConfiguration;
    /** (Required) The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf. */
    service_role:                     any;
    /** (Optional) The state of the compute environment. If the state is `ENABLED`, then the compute environment accepts jobs from a queue and can scale out automatically based on queues. Valid items are `ENABLED` or `DISABLED`. Defaults to `ENABLED`. */
    state?:                           any;
    /** (Optional) Provides information used to select Amazon Machine Images (AMIs) for EC2 instances in the compute environment. If Ec2Configuration isn't specified, the default is ECS_AL2. This parameter isn't applicable to jobs that are running on Fargate resources, and shouldn't be specified. */
    ec2_configuration?:               Ec2Configuration;
    /** (Optional) The launch template to use for your compute resources. See details below. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified. */
    launch_template?:                 LaunchTemplate;
}

export interface ComputeResources {
    /** (Optional) The allocation strategy to use for the compute resource in case not enough instances of the best fitting instance type can be allocated. Valid items are `BEST_FIT_PROGRESSIVE`, `SPOT_CAPACITY_OPTIMIZED` or `BEST_FIT`. Defaults to `BEST_FIT`. See [AWS docs](https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html) for details. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified. */
    allocation_strategy: any;
    /** (Optional) Integer of maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that instance type before instances are launched. For example, if your bid percentage is 20% (`20`), then the Spot price must be below 20% of the current On-Demand price for that EC2 instance. If you leave this field empty, the default value is 100% of the On-Demand price. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified. */
    bid_percentage:      any;
    /** (Optional) The desired number of EC2 vCPUS in the compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified. */
    desired_vcpus:       any;
    /** (Optional) Provides information used to select Amazon Machine Images (AMIs) for EC2 instances in the compute environment. If Ec2Configuration isn't specified, the default is ECS_AL2. This parameter isn't applicable to jobs that are running on Fargate resources, and shouldn't be specified. */
    ec2_configuration:   any;
    /** (Optional) The EC2 key pair that is used for instances launched in the compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified. */
    ec2_key_pair:        any;
    /** (Optional) The Amazon Machine Image (AMI) ID used for instances launched in the compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified. (Deprecated, use [`ec2_configuration`](#ec2_configuration) `image_id_override` instead) */
    image_id:            any;
    /** (Optional) The Amazon ECS instance role applied to Amazon EC2 instances in a compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified. */
    instance_role:       any;
    /** (Optional) A list of instance types that may be launched. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified. */
    instance_type:       any;
    /** (Optional) The launch template to use for your compute resources. See details below. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified. */
    launch_template:     any;
    /** (Required) The maximum number of EC2 vCPUs that an environment can reach. */
    max_vcpus:           any;
    /** (Optional) The minimum number of EC2 vCPUs that an environment should maintain. For `EC2` or `SPOT` compute environments, if the parameter is not explicitly defined, a `0` default value will be set. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified. */
    min_vcpus:           any;
    /** (Optional) The Amazon EC2 placement group to associate with your compute resources. */
    placement_group:     any;
    /** (Optional) A list of EC2 security group that are associated with instances launched in the compute environment. This parameter is required for Fargate compute environments. */
    security_group_ids:  any;
    /** (Optional) The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a SPOT compute environment. This parameter is required for SPOT compute environments. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified. */
    spot_iam_fleet_role: any;
    /** (Required) A list of VPC subnets into which the compute resources are launched. */
    subnets:             any;
    /** (Optional) Key-value pair tags to be applied to resources that are launched in the compute environment. This parameter isn't applicable to jobs running on Fargate resources, and shouldn't be specified. */
    tags:                any;
    /** (Required) The type of compute environment. Valid items are `EC2`, `SPOT`, `FARGATE` or `FARGATE_SPOT`. */
    type:                any;
}

export interface Ec2Configuration {
    /** (Optional) The AMI ID used for instances launched in the compute environment that match the image type. This setting overrides the `image_id` argument in the [`compute_resources`](#compute_resources) block. */
    image_id_override: any;
    /** (Optional) The image type to match with the instance type to select an AMI. If the `image_id_override` parameter isn't specified, then a recent [Amazon ECS-optimized Amazon Linux 2 AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami) (`ECS_AL2`) is used. */
    image_type:        any;
}

export interface EksConfiguration {
    /** (Required) The Amazon Resource Name (ARN) of the Amazon EKS cluster. */
    eks_cluster_arn:      any;
    /** (Required) The namespace of the Amazon EKS cluster. AWS Batch manages pods in this namespace. */
    kubernetes_namespace: any;
}

export interface LaunchTemplate {
    /** (Optional) ID of the launch template. You must specify either the launch template ID or launch template name in the request, but not both. */
    launch_template_id:   any;
    /** (Optional) Name of the launch template. */
    launch_template_name: any;
    /** (Optional) The version number of the launch template. Default: The default version of the launch template. */
    version:              any;
}