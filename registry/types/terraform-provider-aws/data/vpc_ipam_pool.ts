export interface VpcIPAMPool {
    data: Datum[];
}

export interface Datum {
    vpc_ipam_pool: VpcIPAMPoolClass;
}

export interface VpcIPAMPoolClass {
    /** (Optional) ID of the IPAM pool you would like information on. */
    ipam_pool_id?: any;
    filter?:       Filter;
}

export interface Filter {
    /** (Required) The name of the filter. Filter names are case-sensitive. */
    name:   any;
    /** (Required) The filter values. Filter values are case-sensitive. */
    values: any;
}