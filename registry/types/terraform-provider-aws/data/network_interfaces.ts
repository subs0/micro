export interface NetworkInterfaces {
    data: Datum[];
}

export interface Datum {
    network_interfaces: NetworkInterfacesClass;
}

export interface NetworkInterfacesClass {
    /** (Optional) Map of tags, each pair of which must exactly match */
    tags?:   any;
    /** (Optional) Custom filter block as described below. */
    filter?: any;
    /** (Required) Name of the field to filter by, as defined by */
    name:    any;
    /** (Required) Set of values that are accepted for the given field. */
    values:  any;
}