export interface SagemakerNotebookInstance {
    resource: Resource[];
}

export interface Resource {
    sagemaker_notebook_instance: SagemakerNotebookInstanceClass;
}

export interface SagemakerNotebookInstanceClass {
    /** (Required) The name of the notebook instance (must be unique). */
    name:                                     any;
    /** (Required) The ARN of the IAM role to be used by the notebook instance which allows SageMaker to call other services on your behalf. */
    role_arn:                                 any;
    /** (Required) The name of ML compute instance type. */
    instance_type:                            any;
    /** (Optional) The platform identifier of the notebook instance runtime environment. This value can be either `notebook-al1-v1`, `notebook-al2-v1`, or  `notebook-al2-v2`, depending on which version of Amazon Linux you require. */
    platform_identifier?:                     any;
    /** (Optional) The size, in GB, of the ML storage volume to attach to the notebook instance. The default value is 5 GB. */
    volume_size?:                             any;
    /** (Optional) The VPC subnet ID. */
    subnet_id?:                               any;
    /** (Optional) The associated security groups. */
    security_groups?:                         any;
    /** (Optional) A list of Elastic Inference (EI) instance types to associate with this notebook instance. See [Elastic Inference Accelerator](https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html) for more details. Valid values: `ml.eia1.medium`, `ml.eia1.large`, `ml.eia1.xlarge`, `ml.eia2.medium`, `ml.eia2.large`, `ml.eia2.xlarge`. */
    accelerator_types?:                       any;
    /** (Optional) An array of up to three Git repositories to associate with the notebook instance. */
    additional_code_repositories?:            any;
    /** (Optional) The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in [AWS CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository. */
    default_code_repository?:                 any;
    /** (Optional) Set to `Disabled` to disable internet access to notebook. Requires `security_groups` and `subnet_id` to be set. Supported values: `Enabled` (Default) or `Disabled`. If set to `Disabled`, the notebook instance will be able to access resources only in your VPC, and will not be able to connect to Amazon SageMaker training and endpoint services unless your configure a NAT Gateway in your VPC. */
    direct_internet_access?:                  any;
    instance_metadata_service_configuration?: InstanceMetadataServiceConfiguration;
    /** (Optional) The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. */
    kms_key_id?:                              any;
    /** (Optional) The name of a lifecycle configuration to associate with the notebook instance. */
    lifecycle_config_name?:                   any;
    /** (Optional) Whether root access is `Enabled` or `Disabled` for users of the notebook instance. The default value is `Enabled`. */
    root_access?:                             any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                    any;
}

export interface InstanceMetadataServiceConfiguration {
    /** (Optional) Indicates the minimum IMDS version that the notebook instance supports. When passed "1" is passed. This means that both IMDSv1 and IMDSv2 are supported. Valid values are `1` and `2`. */
    minimum_instance_metadata_service_version: any;
}