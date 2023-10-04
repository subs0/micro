export interface IamSigningCertificate {
    resource: Resource[];
}

export interface Resource {
    iam_signing_certificate: IamSigningCertificateClass;
}

export interface IamSigningCertificateClass {
    "This resource supports the following arguments:"?: any;
}