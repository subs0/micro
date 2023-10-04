export interface LightsailStaticIPAttachment {
    resource: Resource[];
}

export interface Resource {
    lightsail_static_ip_attachment: LightsailStaticIPAttachmentClass;
}

export interface LightsailStaticIPAttachmentClass {
    /** (Required) The name of the allocated static IP */
    static_ip_name: any;
    /** (Required) The name of the Lightsail instance to attach the IP to */
    instance_name:  any;
}