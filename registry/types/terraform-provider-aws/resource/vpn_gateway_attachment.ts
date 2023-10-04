export interface VPNGatewayAttachment {
    resource: Resource[];
}

export interface Resource {
    vpn_gateway_attachment: VPNGatewayAttachmentClass;
}

export interface VPNGatewayAttachmentClass {
    /** (Required) The ID of the VPC. */
    vpc_id:         any;
    /** (Required) The ID of the Virtual Private Gateway. */
    vpn_gateway_id: any;
}