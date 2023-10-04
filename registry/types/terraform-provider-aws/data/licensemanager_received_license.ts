export interface LicensemanagerReceivedLicense {
    data: Datum[];
}

export interface Datum {
    licensemanager_received_license: LicensemanagerReceivedLicenseClass;
}

export interface LicensemanagerReceivedLicenseClass {
    /** (Required) The ARN of the received license you want data for. */
    license_arn: any;
}