export interface Ec2ManagedPrefixList {
    data: Datum[];
}

export interface Datum {
    ec2_managed_prefix_list: Ec2ManagedPrefixListClass;
}

export interface Ec2ManagedPrefixListClass {
    /** (Optional) ID of the prefix list to select. */
    id?:     any;
    /** (Required) Name of the filter field. Valid values can be found in the EC2 [DescribeManagedPrefixLists](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeManagedPrefixLists.html) API Reference. */
    name:    any;
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?: any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:  any;
}