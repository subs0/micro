export interface LicensemanagerReceivedLicenses {
    data: Datum[];
}

export interface Datum {
    licensemanager_received_licenses: LicensemanagerReceivedLicensesClass;
}

export interface LicensemanagerReceivedLicensesClass {
    /** (Optional) Custom filter block as described below. */
    filter?: any;
    /** (Required) Name of the field to filter by, as defined by */
    name:    any;
    /** (Required) Set of values that are accepted for the given field. */
    values:  any;
}