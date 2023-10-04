export interface LightsailLBAttachment {
    resource: Resource[];
}

export interface Resource {
    lightsail_lb_attachment: LightsailLBAttachmentClass;
}

export interface LightsailLBAttachmentClass {
    /** (Required) The name of the Lightsail load balancer. */
    lb_name:       any;
    /** (Required) The name of the instance to attach to the load balancer. */
    instance_name: any;
}