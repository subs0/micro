export interface LicensemanagerAssociation {
    resource: Resource[];
}

export interface Resource {
    licensemanager_association: LicensemanagerAssociationClass;
}

export interface LicensemanagerAssociationClass {
    /** (Required) ARN of the license configuration. */
    license_configuration_arn: any;
    /** (Required) ARN of the resource associated with the license configuration. */
    resource_arn:              any;
}