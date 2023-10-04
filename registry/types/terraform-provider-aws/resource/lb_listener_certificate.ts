export interface LBListenerCertificate {
    resource: Resource[];
}

export interface Resource {
    lb_listener_certificate: LBListenerCertificateClass;
}

export interface LBListenerCertificateClass {
    /** (Required, Forces New Resource) The ARN of the listener to which to attach the certificate. */
    listener_arn?:    any;
    /** (Required, Forces New Resource) The ARN of the certificate to attach to the listener. */
    certificate_arn?: any;
}