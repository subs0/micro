export interface LBTargetGroupAttachment {
    resource: Resource[];
}

export interface Resource {
    lb_target_group_attachment: LBTargetGroupAttachmentClass;
}

export interface LBTargetGroupAttachmentClass {
    /** (Required) The ARN of the target group with which to register targets. */
    target_group_arn:   any;
    /** (Optional) The Availability Zone where the IP address of the target is to be registered. If the private IP address is outside of the VPC scope, this value must be set to `all`. */
    availability_zone?: any;
    /** (Optional) The port on which targets receive traffic. */
    port?:              any;
}