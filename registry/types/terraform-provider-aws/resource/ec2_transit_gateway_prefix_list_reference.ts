export interface Ec2TransitGatewayPrefixListReference {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway_prefix_list_reference: Ec2TransitGatewayPrefixListReferenceClass;
}

export interface Ec2TransitGatewayPrefixListReferenceClass {
    /** (Required) Identifier of EC2 Prefix List. */
    prefix_list_id:                 any;
    /** (Required) Identifier of EC2 Transit Gateway Route Table. */
    transit_gateway_route_table_id: any;
    /** (Optional) Indicates whether to drop traffic that matches the Prefix List. Defaults to `false`. */
    blackhole?:                     any;
    /** (Optional) Identifier of EC2 Transit Gateway Attachment. */
    transit_gateway_attachment_id?: any;
}