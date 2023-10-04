export interface Ec2ManagedPrefixLists {
    data: Datum[];
}

export interface Datum {
    ec2_managed_prefix_lists: Ec2ManagedPrefixListsClass;
}

export interface Ec2ManagedPrefixListsClass {
    /** (Optional) Custom filter block as described below. */
    filter?: any;
    /** (Optional) Map of tags, each pair of which must exactly match */
    tags?:   any;
    /** (Required) Name of the field to filter by, as defined by */
    name:    any;
    /** (Required) Set of values that are accepted for the given field. */
    values:  any;
}