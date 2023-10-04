export interface LightsailLBCertificateAttachment {
    resource: Resource[];
}

export interface Resource {
    lightsail_lb_certificate_attachment: LightsailLBCertificateAttachmentClass;
}

export interface LightsailLBCertificateAttachmentClass {
    /** (Required) The name of the load balancer to which you want to associate the SSL/TLS certificate. */
    lb_name:          any;
    /** (Required) The name of your SSL/TLS certificate. */
    certificate_name: any;
}