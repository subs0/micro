export interface DmsCertificate {
    data: Datum[];
}

export interface Datum {
    dms_certificate: DmsCertificateClass;
}

export interface DmsCertificateClass {
    /** (Required) A customer-assigned name for the certificate. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens. */
    certificate_id: any;
}