export interface Ec2TransitGatewayAttachment {
    data: Datum[];
}

export interface Datum {
    ec2_transit_gateway_attachment: Ec2TransitGatewayAttachmentClass;
}

export interface Ec2TransitGatewayAttachmentClass {
    /** (Optional) One or more configuration blocks containing name-values filters. Detailed below. */
    filter?:                        any;
    /** (Optional) ID of the attachment. */
    transit_gateway_attachment_id?: any;
    /** (Required) Name of the field to filter by, as defined by the [underlying AWS API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayAttachments.html). */
    name:                           any;
    /** (Required) List of one or more values for the filter. */
    values:                         any;
}