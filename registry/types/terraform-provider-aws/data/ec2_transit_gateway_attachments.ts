export interface Ec2TransitGatewayAttachments {
    data: Datum[];
}

export interface Datum {
    ec2_transit_gateway_attachments: Ec2TransitGatewayAttachmentsClass;
}

export interface Ec2TransitGatewayAttachmentsClass {
    /** (Optional) One or more configuration blocks containing name-values filters. Detailed below. */
    filter?: any;
    /** (Required) Name of the filter check available value on [official documentation][1] */
    name:    any;
    /** (Required) List of one or more values for the filter. */
    values:  any;
}