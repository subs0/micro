export interface SagemakerApp {
    resource: Resource[];
}

export interface Resource {
    sagemaker_app: SagemakerAppClass;
}

export interface SagemakerAppClass {
    /** (Required) The name of the app. */
    app_name:                     any;
    /** (Required) The type of app. Valid values are `JupyterServer`, `KernelGateway`, `RStudioServerPro`, `RSessionGateway` and `TensorBoard`. */
    app_type:                     any;
    /** (Required) The domain ID. */
    domain_id:                    any;
    /** (Optional) The user profile name. At least one of `user_profile_name` or `space_name` required. */
    user_profile_name?:           any;
    /** (Optional) The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.See [Resource Spec](#resource-spec) below. */
    resource_spec?:               any;
    /** (Optional) The name of the space. At least one of `user_profile_name` or `space_name` required. */
    space_name?:                  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
    /** (Optional) The instance type that the image version runs on. For valid values see [SageMaker Instance Types](https://docs.aws.amazon.com/sagemaker/latest/dg/notebooks-available-instance-types.html). */
    instance_type?:               any;
    /** (Optional) The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource. */
    lifecycle_config_arn?:        any;
    /** (Optional) The ARN of the SageMaker image that the image version belongs to. */
    sagemaker_image_arn?:         any;
    /** (Optional) The ARN of the image version created on the instance. */
    sagemaker_image_version_arn?: any;
}