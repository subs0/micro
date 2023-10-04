export interface AcmpcaCertificate {
    data: Datum[];
}

export interface Datum {
    acmpca_certificate: AcmpcaCertificateClass;
}

export interface AcmpcaCertificateClass {
    /** (Required) ARN of the certificate issued by the private certificate authority. */
    arn:                       any;
    /** (Required) ARN of the certificate authority. */
    certificate_authority_arn: any;
}