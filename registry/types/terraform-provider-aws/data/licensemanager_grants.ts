export interface LicensemanagerGrants {
    data: Datum[];
}

export interface Datum {
    licensemanager_grants: LicensemanagerGrantsClass;
}

export interface LicensemanagerGrantsClass {
    /** (Optional) Custom filter block as described below. */
    filter?: any;
    /** (Required) Name of the field to filter by, as defined by */
    name:    any;
    /** (Required) Set of values that are accepted for the given field. */
    values:  any;
}