export interface LightsailCertificate {
    resource: Resource[];
}

export interface Resource {
    lightsail_certificate: LightsailCertificateClass;
}

export interface LightsailCertificateClass {
    /** (Required) The name of the Lightsail load balancer. */
    name:                       any;
    /** (Required) A domain name for which the certificate should be issued. */
    domain_name:                any;
    /** (Optional) Set of domains that should be SANs in the issued certificate. `domain_name` attribute is automatically added as a Subject Alternative Name. */
    subject_alternative_names?: any;
    /** (Optional) A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
}