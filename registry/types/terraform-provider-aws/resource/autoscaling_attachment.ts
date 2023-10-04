export interface AutoscalingAttachment {
    resource: Resource[];
}

export interface Resource {
    autoscaling_attachment: AutoscalingAttachmentClass;
}

export interface AutoscalingAttachmentClass {
    /** (Required) Name of ASG to associate with the ELB. */
    autoscaling_group_name: any;
    /** (Optional) Name of the ELB. */
    elb?:                   any;
    /** (Optional) ARN of a load balancer target group. */
    lb_target_group_arn?:   any;
}