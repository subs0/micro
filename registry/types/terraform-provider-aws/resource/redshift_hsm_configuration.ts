export interface RedshiftHSMConfiguration {
    resource: Resource[];
}

export interface Resource {
    redshift_hsm_configuration: RedshiftHSMConfigurationClass;
}

export interface RedshiftHSMConfigurationClass {
    /** (Required, Forces new resource) A text description of the HSM configuration to be created. */
    description?:                   any;
    /** (Required, Forces new resource) The identifier to be assigned to the new Amazon Redshift HSM configuration. */
    hsm_configuration_identifier?:  any;
    /** (Required, Forces new resource) The IP address that the Amazon Redshift cluster must use to access the HSM. */
    hsm_ip_address?:                any;
    /** (Required, Forces new resource) The name of the partition in the HSM where the Amazon Redshift clusters will store their database encryption keys. */
    hsm_partition_name?:            any;
    /** (Required, Forces new resource) The password required to access the HSM partition. */
    hsm_partition_password?:        any;
    /** (Required, Forces new resource) The HSMs public certificate file. When using Cloud HSM, the file name is server.pem. */
    hsm_server_public_certificate?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
}