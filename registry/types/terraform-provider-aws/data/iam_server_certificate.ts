export interface IamServerCertificate {
    data: Datum[];
}

export interface Datum {
    iam_server_certificate: IamServerCertificateClass;
}

export interface IamServerCertificateClass {
    /** prefix of cert to filter by */
    name_prefix?: any;
    /** prefix of path to filter by */
    path_prefix?: any;
    /** exact name of the cert to lookup */
    name?:        any;
    /** sort results by expiration date. returns the certificate with expiration date in furthest in the future. */
    latest?:      any;
}