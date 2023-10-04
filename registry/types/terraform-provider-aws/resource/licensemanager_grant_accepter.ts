export interface LicensemanagerGrantAccepter {
    resource: Resource[];
}

export interface Resource {
    licensemanager_grant_accepter: LicensemanagerGrantAccepterClass;
}

export interface LicensemanagerGrantAccepterClass {
    /** (Required) The ARN of the grant to accept. */
    grant_arn: any;
}