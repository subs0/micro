export interface LicensemanagerGrant {
    resource: Resource[];
}

export interface Resource {
    licensemanager_grant: LicensemanagerGrantClass;
}

export interface LicensemanagerGrantClass {
    /** (Required) The Name of the grant. */
    name:               any;
    /** (Required) A list of the allowed operations for the grant. This is a subset of the allowed operations on the license. */
    allowed_operations: any;
    /** (Required) The ARN of the license to grant. */
    license_arn:        any;
    /** (Required) The target account for the grant in the form of the ARN for an account principal of the root user. */
    principal:          any;
    /** (Required) The home region for the license. */
    home_region:        any;
}