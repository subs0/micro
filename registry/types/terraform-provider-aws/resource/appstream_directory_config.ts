export interface AppstreamDirectoryConfig {
    resource: Resource[];
}

export interface Resource {
    appstream_directory_config: AppstreamDirectoryConfigClass;
}

export interface AppstreamDirectoryConfigClass {
    /** (Required) Fully qualified name of the directory. */
    directory_name:                          any;
    /** (Required) Distinguished names of the organizational units for computer accounts. */
    organizational_unit_distinguished_names: any;
    /** (Required) Configuration block for the name of the directory and organizational unit (OU) to use to join the directory config to a Microsoft Active Directory domain. See [`service_account_credentials`](#service_account_credentials) below. */
    service_account_credentials:             any;
    /** (Required) User name of the account. This account must have the following privileges: create computer objects, join computers to the domain, and change/reset the password on descendant computer objects for the organizational units specified. */
    account_name:                            any;
    /** (Required) Password for the account. */
    account_password:                        any;
}