export interface TransferCertificate {
    resource: Resource[];
}

export interface Resource {
    transfer_certificate: TransferCertificateClass;
}

export interface TransferCertificateClass {
    /** (Required) The valid certificate file required for the transfer. */
    certificate:        any;
    /** (Optional) The optional list of certificate that make up the chain for the certificate that is being imported. */
    certificate_chain?: any;
    /** (Optional) A short description that helps identify the certificate. */
    description?:       any;
    /** (Optional) The private key associated with the certificate being imported. */
    private_key?:       any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
    /** (Required) Specifies if a certificate is being used for signing or encryption. The valid values are SIGNING and ENCRYPTION. */
    usage:              any;
}