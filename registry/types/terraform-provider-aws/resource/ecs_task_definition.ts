export interface EcsTaskDefinition {
    resource: Resource[];
}

export interface Resource {
    ecs_task_definition: EcsTaskDefinitionClass;
}

export interface EcsTaskDefinitionClass {
    /** (Required) A list of valid [container definitions](http://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html) provided as a single valid JSON document. Please note that you should only provide values that are part of the container definition document. For a detailed description of what parameters are available, see the [Task Definition Parameters](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) section from the official [Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide). */
    container_definitions:                         any;
    /** (Required) A unique name for your task definition. */
    family:                                        any;
    /** (Optional) Number of cpu units used by the task. If the `requires_compatibilities` is `FARGATE` this field is required. */
    cpu?:                                          any;
    /** (Optional) ARN of the task execution role that the Amazon ECS container agent and the Docker daemon can assume. */
    execution_role_arn?:                           any;
    inference_accelerator?:                        InferenceAccelerator;
    /** (Optional) IPC resource namespace to be used for the containers in the task The valid values are `host`, `task`, and `none`. */
    ipc_mode?:                                     any;
    /** (Optional) Amount (in MiB) of memory used by the task. If the `requires_compatibilities` is `FARGATE` this field is required. */
    memory?:                                       any;
    /** (Optional) Docker networking mode to use for the containers in the task. Valid values are `none`, `bridge`, `awsvpc`, and `host`. */
    network_mode?:                                 any;
    runtime_platform?:                             RuntimePlatform;
    /** (Optional) Process namespace to use for the containers in the task. The valid values are `host` and `task`. */
    pid_mode?:                                     any;
    placement_constraints?:                        PlacementConstraints;
    proxy_configuration?:                          ProxyConfiguration;
    ephemeral_storage?:                            EphemeralStorage;
    /** (Optional) Set of launch types required by the task. The valid values are `EC2` and `FARGATE`. */
    requires_compatibilities?:                     any;
    /** (Optional) Whether to retain the old revision when the resource is destroyed or replacement is necessary. Default is `false`. */
    skip_destroy?:                                 any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                         any;
    /** (Optional) ARN of IAM role that allows your Amazon ECS container task to make calls to other AWS services. */
    task_role_arn?:                                any;
    volume?:                                       Volume;
    /** (Optional) Configuration block to configure a [docker volume](#docker_volume_configuration). Detailed below. */
    docker_volume_configuration?:                  DockerVolumeConfiguration;
    /** (Optional) Configuration block for an [EFS volume](#efs_volume_configuration). Detailed below. */
    efs_volume_configuration?:                     EFSVolumeConfiguration;
    /** (Optional) Configuration block for an [FSX Windows File Server volume](#fsx_windows_file_server_volume_configuration). Detailed below. */
    fsx_windows_file_server_volume_configuration?: FsxWindowsFileServerVolumeConfiguration;
}

export interface DockerVolumeConfiguration {
    /** (Optional) If this value is `true`, the Docker volume is created if it does not already exist. *Note*: This field is only used if the scope is `shared`. */
    autoprovision: any;
    /** (Optional) Map of Docker driver specific options. */
    driver_opts:   any;
    /** (Optional) Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement. */
    driver:        any;
    /** (Optional) Map of custom metadata to add to your Docker volume. */
    labels:        any;
    /** (Optional) Scope for the Docker volume, which determines its lifecycle, either `task` or `shared`.  Docker volumes that are scoped to a `task` are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as `shared` persist after the task stops. */
    scope:         any;
}

export interface EFSVolumeConfiguration {
    /** (Required) The Amazon FSx for Windows File Server file system ID to use. */
    file_system_id:          any;
    /** (Required) The directory within the Amazon FSx for Windows File Server file system to mount as the root directory inside the host. */
    root_directory:          any;
    /** (Optional) Whether or not to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. Transit encryption must be enabled if Amazon EFS IAM authorization is used. Valid values: `ENABLED`, `DISABLED`. If this parameter is omitted, the default value of `DISABLED` is used. */
    transit_encryption:      any;
    /** (Optional) Port to use for transit encryption. If you do not specify a transit encryption port, it will use the port selection strategy that the Amazon EFS mount helper uses. */
    transit_encryption_port: any;
    /** (Required) Configuration block for [authorization](#authorization_config) for the Amazon FSx for Windows File Server file system detailed below. */
    authorization_config:    any;
}

export interface EphemeralStorage {
    /** (Required) The total amount, in GiB, of ephemeral storage to set for the task. The minimum supported value is `21` GiB and the maximum supported value is `200` GiB. */
    size_in_gib: any;
}

export interface FsxWindowsFileServerVolumeConfiguration {
    /** (Required) The Amazon FSx for Windows File Server file system ID to use. */
    file_system_id:        any;
    /** (Required) The directory within the Amazon FSx for Windows File Server file system to mount as the root directory inside the host. */
    root_directory:        any;
    /** (Required) Configuration block for [authorization](#authorization_config) for the Amazon FSx for Windows File Server file system detailed below. */
    authorization_config:  any;
    /** (Required) The authorization credential option to use. The authorization credential options can be provided using either the Amazon Resource Name (ARN) of an AWS Secrets Manager secret or AWS Systems Manager Parameter Store parameter. The ARNs refer to the stored credentials. */
    credentials_parameter: any;
    /** (Required) A fully qualified domain name hosted by an AWS Directory Service Managed Microsoft AD (Active Directory) or self-hosted AD on Amazon EC2. */
    domain:                any;
}

export interface InferenceAccelerator {
    /** (Required) Elastic Inference accelerator device name. The deviceName must also be referenced in a container definition as a ResourceRequirement. */
    device_name: any;
    /** (Required) Elastic Inference accelerator type to use. */
    device_type: any;
}

export interface PlacementConstraints {
    /**  (Optional) Cluster Query Language expression to apply to the constraint. For more information, see [Cluster Query Language in the Amazon EC2 Container Service Developer Guide](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html). */
    expression: any;
    /** (Optional) Proxy type. The default value is `APPMESH`. The only supported value is `APPMESH`. */
    type:       any;
}

export interface ProxyConfiguration {
    /** (Required) Name of the container that will serve as the App Mesh proxy. */
    container_name: any;
    /** (Required) Set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified a key-value mapping. */
    properties:     any;
    /** (Optional) Proxy type. The default value is `APPMESH`. The only supported value is `APPMESH`. */
    type:           any;
}

export interface RuntimePlatform {
    /** (Optional) If the `requires_compatibilities` is `FARGATE` this field is required; must be set to a valid option from the [operating system family in the runtime platform](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#runtime-platform) setting */
    operating_system_family: any;
    /** (Optional) Must be set to either `X86_64` or `ARM64`; see [cpu architecture](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#runtime-platform) */
    cpu_architecture:        any;
    /** (Optional) Access point ID to use. If an access point is specified, the root directory value will be relative to the directory set for the access point. If specified, transit encryption must be enabled in the EFSVolumeConfiguration. */
    access_point_id:         any;
    /** (Optional) Whether or not to use the Amazon ECS task IAM role defined in a task definition when mounting the Amazon EFS file system. If enabled, transit encryption must be enabled in the EFSVolumeConfiguration. Valid values: `ENABLED`, `DISABLED`. If this parameter is omitted, the default value of `DISABLED` is used. */
    iam:                     any;
}

export interface Volume {
    /** (Optional) Configuration block to configure a [docker volume](#docker_volume_configuration). Detailed below. */
    docker_volume_configuration:                  any;
    /** (Optional) Configuration block for an [EFS volume](#efs_volume_configuration). Detailed below. */
    efs_volume_configuration:                     any;
    /** (Optional) Configuration block for an [FSX Windows File Server volume](#fsx_windows_file_server_volume_configuration). Detailed below. */
    fsx_windows_file_server_volume_configuration: any;
    /** (Optional) Path on the host container instance that is presented to the container. If not set, ECS will create a nonpersistent data volume that starts empty and is deleted after the task has finished. */
    host_path:                                    any;
    /** (Required) Name of the volume. This name is referenced in the `sourceVolume` */
    name:                                         any;
}