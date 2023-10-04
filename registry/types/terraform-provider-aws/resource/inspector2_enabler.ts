export interface Inspector2Enabler {
    resource: Resource[];
}

export interface Resource {
    inspector2_enabler: Inspector2EnablerClass;
}

export interface Inspector2EnablerClass {
    /** (Required) Set of account IDs. */
    account_ids:    any;
    /** (Required) Type of resources to scan. */
    resource_types: any;
}