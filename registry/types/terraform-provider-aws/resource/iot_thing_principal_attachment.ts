export interface IotThingPrincipalAttachment {
    resource: Resource[];
}

export interface Resource {
    iot_thing_principal_attachment: IotThingPrincipalAttachmentClass;
}

export interface IotThingPrincipalAttachmentClass {
    /** (Required) The AWS IoT Certificate ARN or Amazon Cognito Identity ID. */
    principal: any;
    /** (Required) The name of the thing. */
    thing:     any;
}