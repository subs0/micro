export interface OpsworksStack {
    resource: Resource[];
}

export interface Resource {
    opsworks_stack: OpsworksStackClass;
}

export interface OpsworksStackClass {
    /** (Required) The name of the stack. */
    name:                           any;
    /** (Required) The name of the region where the stack will exist. */
    region:                         any;
    /** (Required) The ARN of an IAM role that the OpsWorks service will act as. */
    service_role_arn:               any;
    /** (Required) The ARN of an IAM Instance Profile that created instances will have by default. */
    default_instance_profile_arn:   any;
    /** (Optional) If set to `"LATEST"`, OpsWorks will automatically install the latest version. */
    agent_version?:                 any;
    /** (Optional) If `manage_berkshelf` is enabled, the version of Berkshelf to use. */
    berkshelf_version?:             any;
    /** (Optional) Color to paint next to the stack's resources in the OpsWorks console. */
    color?:                         any;
    /** (Optional) Name of the configuration manager to use. Defaults to "Chef". */
    configuration_manager_name?:    any;
    /** (Optional) Version of the configuration manager to use. Defaults to "11.4". */
    configuration_manager_version?: any;
    /** (Optional) When `use_custom_cookbooks` is set, provide this sub-object as described below. */
    custom_cookbooks_source?:       any;
    /** (Optional) Custom JSON attributes to apply to the entire stack. */
    custom_json?:                   any;
    /** (Optional) Name of the availability zone where instances will be created by default. */
    default_availability_zone?:     any;
    /** (Optional) Name of OS that will be installed on instances by default. */
    default_os?:                    any;
    /** (Optional) Name of the type of root device instances will have by default. */
    default_root_device_type?:      any;
    /** (Optional) Name of the SSH keypair that instances will have by default. */
    default_ssh_key_name?:          any;
    /** (Optional) ID of the subnet in which instances will be created by default. */
    default_subnet_id?:             any;
    /** (Optional) Keyword representing the naming scheme that will be used for instance hostnames within this stack. */
    hostname_theme?:                any;
    /** (Optional) Boolean value controlling whether Opsworks will run Berkshelf for this stack. */
    manage_berkshelf?:              any;
    /** (Optional) A map of tags to assign to the resource. */
    tags?:                          any;
    /** (Optional) Boolean value controlling whether the custom cookbook settings are enabled. */
    use_custom_cookbooks?:          any;
    /** (Optional) Boolean value controlling whether the standard OpsWorks security groups apply to created instances. */
    use_opsworks_security_groups?:  any;
    /** (Optional) ID of the VPC that this stack belongs to. */
    vpc_id?:                        any;
    /** (Required) The type of source to use. For example, "archive". */
    type:                           any;
    /** (Required) The URL where the cookbooks resource can be found. */
    url:                            any;
    /** (Optional) Username to use when authenticating to the source. */
    username?:                      any;
    /** (Optional) Password to use when authenticating to the source. Terraform cannot perform drift detection of this configuration. */
    password?:                      any;
    /** (Optional) SSH key to use when authenticating to the source. Terraform cannot perform drift detection of this configuration. */
    ssh_key?:                       any;
    /** (Optional) For sources that are version-aware, the revision to use. */
    revision?:                      any;
}