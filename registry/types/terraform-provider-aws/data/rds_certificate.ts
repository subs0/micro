export interface RDSCertificate {
    data: Datum[];
}

export interface Datum {
    rds_certificate: RDSCertificateClass;
}

export interface RDSCertificateClass {
    /** (Optional) Certificate identifier. For example, `rds-ca-2019`. */
    id?:                any;
    /** (Optional) When enabled, returns the certificate with the latest `ValidTill`. */
    latest_valid_till?: any;
}