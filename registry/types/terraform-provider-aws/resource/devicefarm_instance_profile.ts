export interface DevicefarmInstanceProfile {
    resource: Resource[];
}

export interface Resource {
    devicefarm_instance_profile: DevicefarmInstanceProfileClass;
}

export interface DevicefarmInstanceProfileClass {
    /** (Optional) The description of the instance profile. */
    description?:                       any;
    /** (Optional) An array of strings that specifies the list of app packages that should not be cleaned up from the device after a test run. */
    exclude_app_packages_from_cleanup?: any;
    /** (Required) The name for the instance profile. */
    name:                               any;
    /** (Optional) When set to `true`, Device Farm removes app packages after a test run. The default value is `false` for private devices. */
    package_cleanup?:                   any;
    /** (Optional) When set to `true`, Device Farm reboots the instance after a test run. The default value is `true`. */
    reboot_after_use?:                  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                              any;
}