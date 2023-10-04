export interface ElbAttachment {
    resource: Resource[];
}

export interface Resource {
    elb_attachment: ElbAttachmentClass;
}

export interface ElbAttachmentClass {
    /** (Required) The name of the ELB. */
    elb:      any;
    /** (Required) Instance ID to place in the ELB pool. */
    instance: any;
}