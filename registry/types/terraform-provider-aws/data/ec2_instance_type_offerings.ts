export interface Ec2InstanceTypeOfferings {
    data: Datum[];
}

export interface Datum {
    ec2_instance_type_offerings: Ec2InstanceTypeOfferingsClass;
}

export interface Ec2InstanceTypeOfferingsClass {
    /** (Optional) One or more configuration blocks containing name-values filters. See the [EC2 API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceTypeOfferings.html) for supported filters. Detailed below. */
    filter?:        any;
    /** (Optional) Location type. Defaults to `region`. Valid values: `availability-zone`, `availability-zone-id`, and `region`. */
    location_type?: any;
    /** (Required) Name of the filter. The `location` filter depends on the top-level `location_type` argument and if not specified, defaults to the current region. */
    name:           any;
    /** (Required) List of one or more values for the filter. */
    values:         any;
}