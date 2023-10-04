export interface AcmpcaCertificate {
    resource: Resource[];
}

export interface Resource {
    acmpca_certificate: AcmpcaCertificateClass;
}

export interface AcmpcaCertificateClass {
    /** (Required) ARN of the certificate authority. */
    certificate_authority_arn:   any;
    /** (Required) Certificate Signing Request in PEM format. */
    certificate_signing_request: any;
    /** (Required) Algorithm to use to sign certificate requests. Valid values: `SHA256WITHRSA`, `SHA256WITHECDSA`, `SHA384WITHRSA`, `SHA384WITHECDSA`, `SHA512WITHRSA`, `SHA512WITHECDSA`. */
    signing_algorithm:           any;
    /** (Required) Configures end of the validity period for the certificate. See [validity block](#validity-block) below. */
    validity:                    any;
    /** (Optional) Template to use when issuing a certificate. */
    template_arn?:               any;
    /** (Optional) Specifies X.509 certificate information to be included in the issued certificate. To use with API Passthrough templates */
    api_passthrough?:            any;
    /** (Required) Determines how `value` is interpreted. Valid values: `DAYS`, `MONTHS`, `YEARS`, `ABSOLUTE`, `END_DATE`. */
    type:                        any;
    /** (Required) If `type` is `DAYS`, `MONTHS`, or `YEARS`, the relative time until the certificate expires. If `type` is `ABSOLUTE`, the date in seconds since the Unix epoch. If `type` is `END_DATE`, the  date in RFC 3339 format. */
    value:                       any;
}