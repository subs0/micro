export interface AcmpcaCertificateAuthorityCertificate {
    resource: Resource[];
}

export interface Resource {
    acmpca_certificate_authority_certificate: AcmpcaCertificateAuthorityCertificateClass;
}

export interface AcmpcaCertificateAuthorityCertificateClass {
    /** (Required) PEM-encoded certificate for the Certificate Authority. */
    certificate:               any;
    /** (Required) ARN of the Certificate Authority. */
    certificate_authority_arn: any;
    /** (Optional) PEM-encoded certificate chain that includes any intermediate certificates and chains up to root CA. Required for subordinate Certificate Authorities. Not allowed for root Certificate Authorities. */
    certificate_chain?:        any;
}