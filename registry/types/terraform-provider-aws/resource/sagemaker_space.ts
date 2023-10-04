export interface SagemakerSpace {
    resource: Resource[];
}

export interface Resource {
    sagemaker_space: SagemakerSpaceClass;
}

export interface SagemakerSpaceClass {
    /** (Required) The name of the space. */
    space_name:                   any;
    /** (Required) The ID of the associated Domain. */
    domain_id:                    any;
    /** (Required) A collection of space settings. See [Space Settings](#space-settings) below. */
    space_settings:               any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
    /** (Optional) The Jupyter server's app settings. See [Jupyter Server App Settings](#jupyter-server-app-settings) below. */
    jupyter_server_app_settings?: any;
    /** (Optional) The kernel gateway app settings. See [Kernel Gateway App Settings](#kernel-gateway-app-settings) below. */
    kernel_gateway_app_settings?: any;
    /** (Optional) The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see [Default Resource Spec](#default-resource-spec) below. */
    default_resource_spec?:       any;
    /** (Optional) A list of custom SageMaker images that are configured to run as a KernelGateway app. see [Custom Image](#custom-image) below. */
    custom_image?:                any;
    /** (Optional) The Amazon Resource Name (ARN) of the Lifecycle Configurations. */
    lifecycle_config_arns?:       any;
    /** (Optional) A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see [Code Repository](#code-repository) below. */
    code_repository?:             any;
    /** (Optional) The URL of the Git repository. */
    repository_url?:              any;
    /** (Optional) The instance type. */
    instance_type?:               any;
    /** (Optional) The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource. */
    lifecycle_config_arn?:        any;
    /** (Optional) The Amazon Resource Name (ARN) of the SageMaker image created on the instance. */
    sagemaker_image_arn?:         any;
    /** (Optional) The ARN of the image version created on the instance. */
    sagemaker_image_version_arn?: any;
    /** (Required) The name of the App Image Config. */
    app_image_config_name:        any;
    /** (Required) The name of the Custom Image. */
    image_name:                   any;
    /** (Optional) The version number of the Custom Image. */
    image_version_number?:        any;
}