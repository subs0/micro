export interface VpcIPAMPools {
    data: Datum[];
}

export interface Datum {
    vpc_ipam_pools: VpcIPAMPoolsClass;
}

export interface VpcIPAMPoolsClass {
    filter: Filter;
}

export interface Filter {
    /** (Required) The name of the filter. Filter names are case-sensitive. */
    name:   any;
    /** (Required) The filter values. Filter values are case-sensitive. */
    values: any;
}