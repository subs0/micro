export interface ImagebuilderDistributionConfiguration {
    resource: Resource[];
}

export interface Resource {
    imagebuilder_distribution_configuration: ImagebuilderDistributionConfigurationClass;
}

export interface ImagebuilderDistributionConfigurationClass {
    /** (Required) Name of the distribution configuration. */
    name:                                  any;
    distribution:                          Distribution;
    /** (Optional) Key-value map of resource tags for the distribution configuration. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                 any;
    /** (Optional) Configuration block with Amazon Machine Image (AMI) distribution settings. Detailed below. */
    ami_distribution_configuration?:       AmiDistributionConfiguration;
    /** (Optional) Configuration block with container distribution settings. Detailed below. */
    container_distribution_configuration?: ContainerDistributionConfiguration;
    /** (Optional) Set of Windows faster-launching configurations to use for AMI distribution. Detailed below. */
    fast_launch_configuration?:            FastLaunchConfiguration;
    /** (Optional) Set of launch template configuration settings that apply to image distribution. Detailed below. */
    launch_template_configuration?:        LaunchTemplateConfiguration;
    /** (Optional) Configuration block of EC2 launch permissions to apply to the distributed AMI. Detailed below. */
    launch_permission?:                    LaunchPermission;
    /** (Required) The name of the container repository where the output container image is stored. This name is prefixed by the repository location. */
    repository_name:                       any;
    /** (Required) The service in which this image is registered. Valid values: `ECR`. */
    service:                               any;
    /** (Optional) Configuration block for the launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots. Detailed below. */
    launch_template?:                      LaunchTemplate;
    /** (Optional) Configuration block for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled. Detailed below. */
    snapshot_configuration?:               SnapshotConfiguration;
}

export interface AmiDistributionConfiguration {
    /** (Optional) Key-value map of tags to apply to the distributed AMI. */
    ami_tags:           any;
    /** (Optional) Description of the container distribution configuration. */
    description:        any;
    /** (Optional) Amazon Resource Name (ARN) of the Key Management Service (KMS) Key to encrypt the distributed AMI. */
    kms_key_id:         any;
    /** (Optional) Configuration block of EC2 launch permissions to apply to the distributed AMI. Detailed below. */
    launch_permission:  any;
    /** (Required) Name of the distribution configuration. */
    name:               any;
    /** (Optional) Set of AWS Account identifiers to distribute the AMI. */
    target_account_ids: any;
}

export interface ContainerDistributionConfiguration {
    /** (Optional) Set of tags that are attached to the container distribution configuration. */
    container_tags: any;
    /** (Optional) Description of the container distribution configuration. */
    description:    any;
}

export interface Distribution {
    /** (Required) AWS Region for the distribution. */
    region:                                any;
    /** (Optional) Configuration block with Amazon Machine Image (AMI) distribution settings. Detailed below. */
    ami_distribution_configuration?:       any;
    /** (Optional) Configuration block with container distribution settings. Detailed below. */
    container_distribution_configuration?: any;
    /** (Optional) Set of Windows faster-launching configurations to use for AMI distribution. Detailed below. */
    fast_launch_configuration?:            any;
    /** (Optional) Set of launch template configuration settings that apply to image distribution. Detailed below. */
    launch_template_configuration?:        any;
    /** (Optional) Set of Amazon Resource Names (ARNs) of License Manager License Configurations. */
    license_configuration_arns?:           any;
}

export interface FastLaunchConfiguration {
    /** The account ID that this configuration applies to. */
    account_id:             any;
    /** (Required) A Boolean that represents the current state of faster launching for the Windows AMI. Set to `true` to start using Windows faster launching, or `false` to stop using it. */
    enabled:                any;
    /** (Optional) Configuration block for the launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots. Detailed below. */
    launch_template:        any;
    /** (Optional) The maximum number of parallel instances that are launched for creating resources. */
    max_parallel_launches:  any;
    /** (Optional) Configuration block for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled. Detailed below. */
    snapshot_configuration: any;
}

export interface LaunchPermission {
    /** (Optional) Set of AWS Organization ARNs to assign. */
    organization_arns:        any;
    /** (Optional) Set of AWS Organizational Unit ARNs to assign. */
    organizational_unit_arns: any;
    /** (Optional) Set of EC2 launch permission user groups to assign. Use `all` to distribute a public AMI. */
    user_groups:              any;
    /** (Optional) Set of AWS Account identifiers to assign. */
    user_ids:                 any;
}

export interface LaunchTemplate {
    /** (Optional) The ID of the launch template to use for faster launching for a Windows AMI. */
    launch_template_id:      any;
    /** (Optional) The name of the launch template to use for faster launching for a Windows AMI. */
    launch_template_name:    any;
    /** (Optional) The version of the launch template to use for faster launching for a Windows AMI. */
    launch_template_version: any;
}

export interface LaunchTemplateConfiguration {
    /** (Optional) Indicates whether to set the specified Amazon EC2 launch template as the default launch template. Defaults to `true`. */
    default:            any;
    /** The account ID that this configuration applies to. */
    account_id:         any;
    /** (Optional) The ID of the launch template to use for faster launching for a Windows AMI. */
    launch_template_id: any;
}

export interface SnapshotConfiguration {
    /** (Optional) The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI. */
    target_resource_count: any;
}