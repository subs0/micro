export interface Ec2ClientVPNEndpoint {
    data: Datum[];
}

export interface Datum {
    ec2_client_vpn_endpoint: Ec2ClientVPNEndpointClass;
}

export interface Ec2ClientVPNEndpointClass {
    /** (Optional) ID of the Client VPN endpoint. */
    client_vpn_endpoint_id?: any;
    filter?:                 Filter;
    /** (Optional) Map of tags, each pair of which must exactly match a pair on the desired endpoint. */
    tags?:                   any;
}

export interface Filter {
    /** (Required) Name of the field to filter by, as defined by [the underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeClientVpnEndpoints.html). */
    name:   any;
    /** (Required) Set of values that are accepted for the given field. An endpoint will be selected if any one of the given values matches. */
    values: any;
}