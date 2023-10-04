export interface Ec2TransitGatewayVpcAttachment {
    data: Datum[];
}

export interface Datum {
    ec2_transit_gateway_vpc_attachment: Ec2TransitGatewayVpcAttachmentClass;
}

export interface Ec2TransitGatewayVpcAttachmentClass {
    /** (Optional) One or more configuration blocks containing name-values filters. Detailed below. */
    filter?: any;
    /** (Optional) Identifier of the EC2 Transit Gateway VPC Attachment. */
    id?:     any;
    /** (Required) Name of the filter. */
    name:    any;
    /** (Required) List of one or more values for the filter. */
    values:  any;
}