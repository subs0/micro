export interface SagemakerAppImageConfig {
    resource: Resource[];
}

export interface Resource {
    sagemaker_app_image_config: SagemakerAppImageConfigClass;
}

export interface SagemakerAppImageConfigClass {
    /** (Required) The name of the App Image Config. */
    app_image_config_name:        any;
    /** (Optional) The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app. See [Kernel Gateway Image Config](#kernel-gateway-image-config) details below. */
    kernel_gateway_image_config?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
    /** (Optional) The URL where the Git repository is located. See [File System Config](#file-system-config) details below. */
    file_system_config?:          any;
    /** (Required) The default branch for the Git repository. See [Kernel Spec](#kernel-spec) details below. */
    kernel_spec:                  any;
    /** (Optional) The default POSIX group ID (GID). If not specified, defaults to `100`. Valid values are `0` and `100`. */
    default_gid?:                 any;
    /** (Optional) The default POSIX user ID (UID). If not specified, defaults to `1000`. Valid values are `0` and `1000`. */
    default_uid?:                 any;
    /** (Optional) The path within the image to mount the user's EFS home directory. The directory should be empty. If not specified, defaults to `/home/sagemaker-user`. */
    mount_path?:                  any;
    /** (Required) The name of the kernel. */
    name:                         any;
    /** (Optional) The display name of the kernel. */
    display_name?:                any;
}