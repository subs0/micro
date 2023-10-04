export interface SecurityhubOrganizationConfiguration {
    resource: Resource[];
}

export interface Resource {
    securityhub_organization_configuration: SecurityhubOrganizationConfigurationClass;
}

export interface SecurityhubOrganizationConfigurationClass {
    /** (Required) Whether to automatically enable Security Hub for new accounts in the organization. */
    auto_enable:            any;
    /** (Optional) Whether to automatically enable Security Hub default standards for new member accounts in the organization. By default, this parameter is equal to `DEFAULT`, and new member accounts are automatically enabled with default Security Hub standards. To opt out of enabling default standards for new member accounts, set this parameter equal to `NONE`. */
    auto_enable_standards?: any;
}