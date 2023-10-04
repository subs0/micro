export interface SagemakerStudioLifecycleConfig {
    resource: Resource[];
}

export interface Resource {
    sagemaker_studio_lifecycle_config: SagemakerStudioLifecycleConfigClass;
}

export interface SagemakerStudioLifecycleConfigClass {
    /** (Required) The name of the Studio Lifecycle Configuration to create. */
    studio_lifecycle_config_name:     any;
    /** (Required) The App type that the Lifecycle Configuration is attached to. Valid values are `JupyterServer` and `KernelGateway`. */
    studio_lifecycle_config_app_type: any;
    /** (Required) The content of your Studio Lifecycle Configuration script. This content must be base64 encoded. */
    studio_lifecycle_config_content:  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
}