export interface ACMCertificate {
    resource: Resource[];
}

export interface Resource {
    acm_certificate: ACMCertificateClass;
}

export interface ACMCertificateClass {
    /** (Required) Domain name for which the certificate should be issued. */
    domain_name:                any;
    /** (Optional) Set of domains that should be SANs in the issued certificate. */
    subject_alternative_names?: any;
    /** (Optional) Which method to use for validation. `DNS` or `EMAIL` are valid. This parameter must not be set for certificates that were imported into ACM and then into Terraform. */
    validation_method?:         any;
    /** (Optional) Specifies the algorithm of the public and private key pair that your Amazon issued certificate uses to encrypt data. See [ACM Certificate characteristics](https://docs.aws.amazon.com/acm/latest/userguide/acm-certificate.html#algorithms) for more details. */
    key_algorithm?:             any;
    /** (Optional) Configuration block used to set certificate options. Detailed below. */
    options?:                   any;
    /** (Optional) Configuration block used to specify information about the initial validation of each domain name. Detailed below. */
    validation_option?:         any;
    /** (Required) Certificate's PEM-formatted private key */
    private_key:                any;
    /** (Required) Certificate's PEM-formatted public key */
    certificate_body:           any;
    /** (Optional) Certificate's PEM-formatted chain */
    certificate_chain?:         any;
    /** (Required) ARN of an ACM PCA */
    certificate_authority_arn:  any;
    /** (Optional) Amount of time to start automatic renewal process before expiration. */
    early_renewal_duration?:    any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
}