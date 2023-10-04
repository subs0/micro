export interface Ec2TransitGatewayVpcAttachments {
    data: Datum[];
}

export interface Datum {
    ec2_transit_gateway_vpc_attachments: Ec2TransitGatewayVpcAttachmentsClass;
}

export interface Ec2TransitGatewayVpcAttachmentsClass {
    /** (Optional) One or more configuration blocks containing name-values filters. Detailed below. */
    filter?: any;
    /** (Required) Name of the filter check available value on [official documentation][1] */
    name:    any;
    /** (Required) List of one or more values for the filter. */
    values:  any;
}