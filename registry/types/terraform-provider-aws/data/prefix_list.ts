export interface PrefixList {
    data: Datum[];
}

export interface Datum {
    prefix_list: PrefixListClass;
}

export interface PrefixListClass {
    /** (Optional) ID of the prefix list to select. */
    prefix_list_id?: any;
    /** (Required) Name of the filter field. Valid values can be found in the [EC2 DescribePrefixLists API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePrefixLists.html). */
    name:            any;
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?:         any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:          any;
}