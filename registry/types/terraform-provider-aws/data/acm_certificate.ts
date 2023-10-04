export interface ACMCertificate {
    data: Datum[];
}

export interface Datum {
    acm_certificate: ACMCertificateClass;
}

export interface ACMCertificateClass {
    /** (Required) Domain of the certificate to look up. If no certificate is found with this name, an error will be returned. */
    domain:       any;
    /** (Optional) List of key algorithms to filter certificates. By default, ACM does not return all certificate types when searching. See the [ACM API Reference](https://docs.aws.amazon.com/acm/latest/APIReference/API_CertificateDetail.html#ACM-Type-CertificateDetail-KeyAlgorithm) for supported key algorithms. */
    key_types?:   any;
    /** (Optional) List of statuses on which to filter the returned list. Valid values are `PENDING_VALIDATION`, `ISSUED`, */
    statuses?:    any;
    /** (Optional) List of types on which to filter the returned list. Valid values are `AMAZON_ISSUED`, `PRIVATE`, and `IMPORTED`. */
    types?:       any;
    /** (Optional) If set to true, it sorts the certificates matched by previous criteria by the NotBefore field, returning only the most recent one. If set to false, it returns an error if more than one certificate is found. Defaults to false. */
    most_recent?: any;
}