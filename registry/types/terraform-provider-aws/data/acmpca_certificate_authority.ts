export interface AcmpcaCertificateAuthority {
    data: Datum[];
}

export interface Datum {
    acmpca_certificate_authority: AcmpcaCertificateAuthorityClass;
}

export interface AcmpcaCertificateAuthorityClass {
    /** (Required) ARN of the certificate authority. */
    arn: any;
}