export interface VpcDHCPOptions {
    data: Datum[];
}

export interface Datum {
    vpc_dhcp_options: VpcDHCPOptionsClass;
}

export interface VpcDHCPOptionsClass {
    /** (Optional) EC2 DHCP Options ID. */
    dhcp_options_id?: any;
    filter?:          Filter;
}

export interface Filter {
    /** (Required) Name of the field to filter. */
    name:   any;
    /** (Required) Set of values for filtering. */
    values: any;
}