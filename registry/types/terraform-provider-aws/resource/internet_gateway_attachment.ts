export interface InternetGatewayAttachment {
    resource: Resource[];
}

export interface Resource {
    internet_gateway_attachment: InternetGatewayAttachmentClass;
}

export interface InternetGatewayAttachmentClass {
    /** (Required) The ID of the internet gateway. */
    internet_gateway_id: any;
    /** (Required) The ID of the VPC. */
    vpc_id:              any;
}