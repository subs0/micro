export interface LicensemanagerLicenseConfiguration {
    resource: Resource[];
}

export interface Resource {
    licensemanager_license_configuration: LicensemanagerLicenseConfigurationClass;
}

export interface LicensemanagerLicenseConfigurationClass {
    /** (Required) Name of the license configuration. */
    name:                      any;
    /** (Optional) Description of the license configuration. */
    description?:              any;
    /** (Optional) Number of licenses managed by the license configuration. */
    license_count?:            any;
    /** (Optional) Sets the number of available licenses as a hard limit. */
    license_count_hard_limit?: any;
    /** (Required) Dimension to use to track license inventory. Specify either `vCPU`, `Instance`, `Core` or `Socket`. */
    license_counting_type:     any;
    /** (Optional) Array of configured License Manager rules. */
    license_rules?:            any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
}