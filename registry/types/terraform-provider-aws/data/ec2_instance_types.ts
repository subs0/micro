export interface Ec2InstanceTypes {
    data: Datum[];
}

export interface Datum {
    ec2_instance_types: Ec2InstanceTypesClass;
}

export interface Ec2InstanceTypesClass {
    /** (Optional) One or more configuration blocks containing name-values filters. See the [EC2 API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstanceTypes.html) for supported filters. Detailed below. */
    filter?: any;
    /** (Required) Name of the filter. */
    name:    any;
    /** (Required) List of one or more values for the filter. */
    values:  any;
}