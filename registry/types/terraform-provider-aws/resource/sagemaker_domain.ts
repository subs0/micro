export interface SagemakerDomain {
    resource: Resource[];
}

export interface Resource {
    sagemaker_domain: SagemakerDomainClass;
}

export interface SagemakerDomainClass {
    /** (Required) The mode of authentication that members use to access the domain. Valid values are `IAM` and `SSO`. */
    auth_mode:                      any;
    default_space_settings:         DefaultSpaceSettings;
    default_user_settings:          DefaultUserSettings;
    /** (Required) The VPC subnets that Studio uses for communication. */
    subnet_ids:                     any;
    /** (Required) The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication. */
    vpc_id:                         any;
    /** (Optional) Specifies the VPC used for non-EFS traffic. The default value is `PublicInternetOnly`. Valid values are `PublicInternetOnly` and `VpcOnly`. */
    app_network_access_type?:       any;
    /** (Optional) The entity that creates and manages the required security groups for inter-app communication in `VPCOnly` mode. Valid values are `Service` and `Customer`. */
    app_security_group_management?: any;
    domain_settings?:               DomainSettings;
    /** (Optional) The AWS KMS customer managed CMK used to encrypt the EFS volume attached to the domain. */
    kms_key_id?:                    any;
    retention_policy?:              RetentionPolicy;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
}

export interface DefaultSpaceSettings {
    /** (Required) The execution role ARN for the user. */
    execution_role:               any;
    /** (Optional) The Jupyter server's app settings. See [Jupyter Server App Settings](#jupyter_server_app_settings) below. */
    jupyter_server_app_settings?: any;
    /** (Optional) The kernel gateway app settings. See [Kernel Gateway App Settings](#kernel_gateway_app_settings) below. */
    kernel_gateway_app_settings?: any;
    /** (Optional) A list of security group IDs that will be attached to the user. */
    security_groups?:             any;
}

export interface DefaultUserSettings {
    /** (Required) The execution role ARN for the user. */
    execution_role:                         any;
    /** (Optional) The Canvas app settings. See [Canvas App Settings](#canvas_app_settings) below. */
    canvas_app_settings?:                   any;
    /** (Optional) The Jupyter server's app settings. See [Jupyter Server App Settings](#jupyter_server_app_settings) below. */
    jupyter_server_app_settings?:           any;
    /** (Optional) The kernel gateway app settings. See [Kernel Gateway App Settings](#kernel_gateway_app_settings) below. */
    kernel_gateway_app_settings?:           any;
    /** (Optional) The RSession app settings. See [RSession App Settings](#r_session_app_settings) below. */
    r_session_app_settings?:                any;
    /** (Optional) A collection of settings that configure user interaction with the RStudioServerPro app. See [RStudioServerProAppSettings](#r_studio_server_pro_app_settings) below. */
    r_studio_server_pro_app_settings?:      any;
    /** (Optional) A list of security group IDs that will be attached to the user. */
    security_groups?:                       any;
    /** (Optional) The sharing settings. See [Sharing Settings](#sharing_settings) below. */
    sharing_settings?:                      any;
    /** (Optional) The TensorBoard app settings. See [TensorBoard App Settings](#tensor_board_app_settings) below. */
    tensor_board_app_settings?:             any;
    /** (Optional) Indicates whether the current user has access to the RStudioServerPro app. Valid values are `ENABLED` and `DISABLED`. */
    access_status?:                         any;
    /** (Optional) The level of permissions that the user has within the RStudioServerPro app. This value defaults to `R_STUDIO_USER`. The `R_STUDIO_ADMIN` value allows the user access to the RStudio Administrative Dashboard. Valid values are `R_STUDIO_USER` and `R_STUDIO_ADMIN`. */
    user_group?:                            any;
    /** (Optional) The model registry settings for the SageMaker Canvas application. See [Model Register Settings](#model_register_settings) below. */
    model_register_settings?:               any;
    /** (Optional) Time series forecast settings for the Canvas app. See [Time Series Forecasting Settings](#time_series_forecasting_settings) below. */
    time_series_forecasting_settings?:      any;
    /** (Optional) The workspace settings for the SageMaker Canvas application. See [Workspace Settings](#workspace_settings) below. */
    workspace_settings?:                    any;
    /** (Optional) The Amazon Resource Name (ARN) of the SageMaker model registry account. Required only to register model versions created by a different SageMaker Canvas AWS account than the AWS account in which SageMaker model registry is set up. */
    cross_account_model_register_role_arn?: any;
    /** (Optional) Describes whether time series forecasting is enabled or disabled in the Canvas app. Valid values are `ENABLED` and `DISABLED`. */
    status?:                                any;
    /** (Optional) The IAM role that Canvas passes to Amazon Forecast for time series forecasting. By default, Canvas uses the execution role specified in the UserProfile that launches the Canvas app. If an execution role is not specified in the UserProfile, Canvas uses the execution role specified in the Domain that owns the UserProfile. To allow time series forecasting, this IAM role should have the [AmazonSageMakerCanvasForecastAccess](https://docs.aws.amazon.com/sagemaker/latest/dg/security-iam-awsmanpol-canvas.html#security-iam-awsmanpol-AmazonSageMakerCanvasForecastAccess) policy attached and forecast.amazonaws.com added in the trust relationship as a service principal. */
    amazon_forecast_role_arn?:              any;
    /** (Optional) The Amazon S3 bucket used to store artifacts generated by Canvas. Updating the Amazon S3 location impacts existing configuration settings, and Canvas users no longer have access to their artifacts. Canvas users must log out and log back in to apply the new location. */
    s3_artifact_path?:                      any;
    /** (Optional) When `notebook_output_option` is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket. */
    s3_kms_key_id?:                         any;
    /** (Optional) Whether to include the notebook cell output when sharing the notebook. The default is `Disabled`. Valid values are `Allowed` and `Disabled`. */
    notebook_output_option?:                any;
    /** (Optional) When `notebook_output_option` is Allowed, the Amazon S3 bucket used to save the notebook cell output. */
    s3_output_path?:                        any;
    /** (Optional) The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see [Default Resource Spec](#default_resource_spec) below. */
    default_resource_spec?:                 any;
    /** (Optional) A list of custom SageMaker images that are configured to run as a KernelGateway app. see [Custom Image](#custom_image) below. */
    custom_image?:                          any;
    /** (Optional) The Amazon Resource Name (ARN) of the Lifecycle Configurations. */
    lifecycle_config_arns?:                 any;
    /** (Optional) A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see [Code Repository](#code_repository) below. */
    code_repository?:                       any;
    /** (Optional) The URL of the Git repository. */
    repository_url?:                        any;
    /** (Optional) The instance type that the image version runs on.. For valid values see [SageMaker Instance Types](https://docs.aws.amazon.com/sagemaker/latest/dg/notebooks-available-instance-types.html). */
    instance_type?:                         any;
    /** (Optional) The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource. */
    lifecycle_config_arn?:                  any;
    /** (Optional) The ARN of the SageMaker image that the image version belongs to. */
    sagemaker_image_arn?:                   any;
    /** (Optional) The ARN of the image version created on the instance. */
    sagemaker_image_version_arn?:           any;
    /** (Required) The name of the App Image Config. */
    app_image_config_name:                  any;
    /** (Required) The name of the Custom Image. */
    image_name:                             any;
    /** (Optional) The version number of the Custom Image. */
    image_version_number?:                  any;
}

export interface DomainSettings {
    /** (Optional) The configuration for attaching a SageMaker user profile name to the execution role as a sts:SourceIdentity key [AWS Docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html). Valid values are `USER_PROFILE_NAME` and `DISABLED`. */
    execution_role_identity_config:      any;
    /** (Optional) A collection of settings that configure the RStudioServerPro Domain-level app. see [RStudioServerProDomainSettings](#r_studio_server_pro_domain_settings) below. */
    r_studio_server_pro_domain_settings: any;
    /** (Optional) The security groups for the Amazon Virtual Private Cloud that the Domain uses for communication between Domain-level apps and user apps. */
    security_group_ids:                  any;
    /** (Optional) The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see [Default Resource Spec](#default_resource_spec) below. */
    default_resource_spec:               any;
    /** (Required) The ARN of the execution role for the RStudioServerPro Domain-level app. */
    domain_execution_role_arn:           any;
    /** (Optional) A URL pointing to an RStudio Connect server. */
    r_studio_connect_url:                any;
    /** (Optional) A URL pointing to an RStudio Package Manager server. */
    r_studio_package_manager_url:        any;
}

export interface RetentionPolicy {
    /** (Optional) The retention policy for data stored on an Amazon Elastic File System (EFS) volume. Valid values are `Retain` or `Delete`.  Default value is `Retain`. */
    home_efs_file_system: any;
}