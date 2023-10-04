export interface Ec2TransitGatewayPeeringAttachment {
    data: Datum[];
}

export interface Datum {
    ec2_transit_gateway_peering_attachment: Ec2TransitGatewayPeeringAttachmentClass;
}

export interface Ec2TransitGatewayPeeringAttachmentClass {
    /** (Optional) One or more configuration blocks containing name-values filters. Detailed below. */
    filter?: any;
    /** (Optional) Identifier of the EC2 Transit Gateway Peering Attachment. */
    id?:     any;
    /** (Optional) Mapping of tags, each pair of which must exactly match */
    tags?:   any;
    /** (Required) Name of the field to filter by, as defined by */
    name:    any;
    /** (Required) Set of values that are accepted for the given field. */
    values:  any;
}