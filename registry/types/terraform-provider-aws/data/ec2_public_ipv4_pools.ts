export interface Ec2PublicIpv4Pools {
    data: Datum[];
}

export interface Datum {
    ec2_public_ipv4_pools: Ec2PublicIpv4PoolsClass;
}

export interface Ec2PublicIpv4PoolsClass {
    /** (Optional) Custom filter block as described below. */
    filter?: any;
    /** (Optional) Map of tags, each pair of which must exactly match a pair on the desired pools. */
    tags?:   any;
    /** (Required) Name of the field to filter by, as defined by [the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePublicIpv4Pools.html). */
    name:    any;
    /** (Required) Set of values that are accepted for the given field. Pool IDs will be selected if any one of the given values match. */
    values:  any;
}