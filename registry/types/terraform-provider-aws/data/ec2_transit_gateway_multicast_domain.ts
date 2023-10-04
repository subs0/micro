export interface Ec2TransitGatewayMulticastDomain {
    data: Datum[];
}

export interface Datum {
    ec2_transit_gateway_multicast_domain: Ec2TransitGatewayMulticastDomainClass;
}

export interface Ec2TransitGatewayMulticastDomainClass {
    /** (Optional) One or more configuration blocks containing name-values filters. Detailed below. */
    filter?:                              any;
    /** (Optional) Identifier of the EC2 Transit Gateway Multicast Domain. */
    transit_gateway_multicast_domain_id?: any;
    /** (Required) Name of the field to filter by, as defined by [the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayMulticastDomains.html). */
    name:                                 any;
    /** (Required) Set of values that are accepted for the given field. A multicast domain will be selected if any one of the given values matches. */
    values:                               any;
}