export interface DBOptionGroup {
    resource: Resource[];
}

export interface Resource {
    db_option_group: DBOptionGroupClass;
}

export interface DBOptionGroupClass {
    /** (Optional) Name of the setting. */
    name?:                           any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. Must be lowercase, to match as it is stored in AWS. */
    name_prefix?:                    any;
    /** (Optional) Description of the option group. Defaults to "Managed by Terraform". */
    option_group_description?:       any;
    /** (Required) Specifies the name of the engine that this option group should be associated with. */
    engine_name:                     any;
    /** (Required) Specifies the major version of the engine that this option group should be associated with. */
    major_engine_version:            any;
    /** (Optional) List of options to apply. */
    option?:                         any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
    /** (Required) Name of the option (e.g., MEMCACHED). */
    option_name:                     any;
    /** (Optional) List of option settings to apply. */
    option_settings?:                any;
    /** (Optional) Port number when connecting to the option (e.g., 11211). Leaving out or removing `port` from your configuration does not remove or clear a port from the option in AWS. AWS may assign a default port. Not including `port` in your configuration means that the AWS provider will ignore a previously set value, a value set by AWS, and any port changes. */
    port?:                           any;
    /** (Optional) Version of the option (e.g., 13.1.0.0). Leaving out or removing `version` from your configuration does not remove or clear a version from the option in AWS. AWS may assign a default version. Not including `version` in your configuration means that the AWS provider will ignore a previously set value, a value set by AWS, and any version changes. */
    version?:                        any;
    /** (Optional) List of DB Security Groups for which the option is enabled. */
    db_security_group_memberships?:  any;
    /** (Optional) List of VPC Security Groups for which the option is enabled. */
    vpc_security_group_memberships?: any;
    /** (Optional) Value of the setting. */
    value?:                          any;
}