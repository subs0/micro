export interface Eip {
    data: Datum[];
}

export interface Datum {
    eip: EipClass;
}

export interface EipClass {
    /** (Optional) One or more name/value pairs to use as filters. There are several valid keys, for a full reference, check out the [EC2 API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAddresses.html). */
    filter?:    any;
    /** (Optional) Allocation ID of the specific VPC EIP to retrieve. If a classic EIP is required, do NOT set `id`, only set `public_ip` */
    id?:        any;
    /** (Optional) Public IP of the specific EIP to retrieve. */
    public_ip?: any;
    /** (Optional) Map of tags, each pair of which must exactly match a pair on the desired Elastic IP */
    tags?:      any;
}