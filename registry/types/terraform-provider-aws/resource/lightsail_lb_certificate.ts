export interface LightsailLBCertificate {
    resource: Resource[];
}

export interface Resource {
    lightsail_lb_certificate: LightsailLBCertificateClass;
}

export interface LightsailLBCertificateClass {
    /** (Required) The domain name (e.g., example.com) for your SSL/TLS certificate. */
    domain_name:                any;
    /** (Required) The load balancer name where you want to create the SSL/TLS certificate. */
    lb_name:                    any;
    /** (Required) The SSL/TLS certificate name. */
    name:                       any;
    /** (Optional) Set of domains that should be SANs in the issued certificate. `domain_name` attribute is automatically added as a Subject Alternative Name. */
    subject_alternative_names?: any;
}