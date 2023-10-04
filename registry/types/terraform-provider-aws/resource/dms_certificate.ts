export interface DmsCertificate {
    resource: Resource[];
}

export interface Resource {
    dms_certificate: DmsCertificateClass;
}

export interface DmsCertificateClass {
    /** (Required) The certificate identifier. */
    certificate_id:      any;
    /** (Optional) The contents of the .pem X.509 certificate file for the certificate. Either `certificate_pem` or `certificate_wallet` must be set. */
    certificate_pem?:    any;
    /** (Optional) The contents of the Oracle Wallet certificate for use with SSL, provided as a base64-encoded String. Either `certificate_pem` or `certificate_wallet` must be set. */
    certificate_wallet?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
}