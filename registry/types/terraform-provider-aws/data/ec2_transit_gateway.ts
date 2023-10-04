export interface Ec2TransitGateway {
    data: Datum[];
}

export interface Datum {
    ec2_transit_gateway: Ec2TransitGatewayClass;
}

export interface Ec2TransitGatewayClass {
    /** (Optional) One or more configuration blocks containing name-values filters. Detailed below. */
    filter?: any;
    /** (Optional) Identifier of the EC2 Transit Gateway. */
    id?:     any;
    /** (Required) Name of the field to filter by, as defined by the [underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGateways.html). */
    name:    any;
    /** (Required) List of one or more values for the filter. */
    values:  any;
}