export interface S3ControlStorageLensConfiguration {
    resource: Resource[];
}

export interface Resource {
    s3control_storage_lens_configuration: S3ControlStorageLensConfigurationClass;
}

export interface S3ControlStorageLensConfigurationClass {
    /** (Optional) The AWS account ID for the S3 Storage Lens configuration. Defaults to automatically determined account ID of the Terraform AWS provider. */
    account_id?:                any;
    /** (Required) The ID of the S3 Storage Lens configuration. */
    config_id:                  any;
    /** (Required) The S3 Storage Lens configuration. See [Storage Lens Configuration](#storage-lens-configuration) below for more details. */
    storage_lens_configuration: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
}