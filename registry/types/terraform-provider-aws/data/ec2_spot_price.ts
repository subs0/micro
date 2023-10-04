export interface Ec2SpotPrice {
    data: Datum[];
}

export interface Datum {
    ec2_spot_price: Ec2SpotPriceClass;
}

export interface Ec2SpotPriceClass {
    /** (Optional) Type of instance for which to query Spot Price information. */
    instance_type?:     any;
    /** (Optional) Availability zone in which to query Spot price information. */
    availability_zone?: any;
    /** (Optional) One or more configuration blocks containing name-values filters. See the [EC2 API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSpotPriceHistory.html) for supported filters. Detailed below. */
    filter?:            any;
    /** (Required) Name of the filter. */
    name:               any;
    /** (Required) List of one or more values for the filter. */
    values:             any;
}