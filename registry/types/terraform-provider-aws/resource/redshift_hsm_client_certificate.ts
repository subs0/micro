export interface RedshiftHSMClientCertificate {
    resource: Resource[];
}

export interface Resource {
    redshift_hsm_client_certificate: RedshiftHSMClientCertificateClass;
}

export interface RedshiftHSMClientCertificateClass {
    /** (Required, Forces new resource) The identifier of the HSM client certificate. */
    hsm_client_certificate_identifier?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                              any;
}