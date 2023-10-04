export interface Ec2TransitGatewayDxGatewayAttachment {
    data: Datum[];
}

export interface Datum {
    ec2_transit_gateway_dx_gateway_attachment: Ec2TransitGatewayDxGatewayAttachmentClass;
}

export interface Ec2TransitGatewayDxGatewayAttachmentClass {
    /** (Optional) Identifier of the EC2 Transit Gateway. */
    transit_gateway_id?: any;
    /** (Optional) Identifier of the Direct Connect Gateway. */
    dx_gateway_id?:      any;
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?:             any;
    /** (Optional) Map of tags, each pair of which must exactly match a pair on the desired Transit Gateway Direct Connect Gateway Attachment. */
    tags?:               any;
    /** (Required) Name of the filter field. Valid values can be found in the [EC2 DescribeTransitGatewayAttachments API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayAttachments.html). */
    name:                any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:              any;
}