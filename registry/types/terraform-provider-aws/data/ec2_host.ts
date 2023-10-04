export interface Ec2Host {
    data: Datum[];
}

export interface Datum {
    ec2_host: Ec2HostClass;
}

export interface Ec2HostClass {
    filter?:  Filter;
    /** (Optional) ID of the Dedicated Host. */
    host_id?: any;
}

export interface Filter {
    /** (Required) Name of the field to filter by, as defined by [the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeHosts.html). */
    name:   any;
    /** (Required) Set of values that are accepted for the given field. A host will be selected if any one of the given values matches. */
    values: any;
}