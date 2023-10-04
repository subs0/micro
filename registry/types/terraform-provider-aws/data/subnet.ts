export interface Subnet {
    data: Datum[];
}

export interface Datum {
    subnet: SubnetClass;
}

export interface SubnetClass {
    /** (Optional) Availability zone where the subnet must reside. */
    availability_zone?:    any;
    /** (Optional) ID of the Availability Zone for the subnet. This argument is not supported in all regions or partitions. If necessary, use `availability_zone` instead. */
    availability_zone_id?: any;
    /** (Optional) CIDR block of the desired subnet. */
    cidr_block?:           any;
    /** (Optional) Whether the desired subnet must be the default subnet for its associated availability zone. */
    default_for_az?:       any;
    filter?:               Filter;
    /** (Optional) ID of the specific subnet to retrieve. */
    id?:                   any;
    /** (Optional) IPv6 CIDR block of the desired subnet. */
    ipv6_cidr_block?:      any;
    /** (Optional) State that the desired subnet must have. */
    state?:                any;
    /** (Optional) Map of tags, each pair of which must exactly match a pair on the desired subnet. */
    tags?:                 any;
    /** (Optional) ID of the VPC that the desired subnet belongs to. */
    vpc_id?:               any;
}

export interface Filter {
    /** (Required) Name of the field to filter by, as defined by [the underlying AWS API](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSubnets.html). */
    name:   any;
    /** (Required) Set of values that are accepted for the given field. A subnet will be selected if any one of the given values matches. */
    values: any;
}