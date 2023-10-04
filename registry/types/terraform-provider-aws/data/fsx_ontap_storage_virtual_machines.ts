export interface FsxOntapStorageVirtualMachines {
    data: Datum[];
}

export interface Datum {
    fsx_ontap_storage_virtual_machines: FsxOntapStorageVirtualMachinesClass;
}

export interface FsxOntapStorageVirtualMachinesClass {
    filter?: Filter;
}

export interface Filter {
    /** (Required) Name of the field to filter by, as defined by [the underlying AWS API](https://docs.aws.amazon.com/fsx/latest/APIReference/API_StorageVirtualMachineFilter.html). */
    name:   any;
    /** (Required) Set of values that are accepted for the given field. An SVM will be selected if any one of the given values matches. */
    values: any;
}