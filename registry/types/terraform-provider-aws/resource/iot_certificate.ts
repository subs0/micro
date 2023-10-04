export interface IotCertificate {
    resource: Resource[];
}

export interface Resource {
    iot_certificate: IotCertificateClass;
}

export interface IotCertificateClass {
    /** (Required)  Boolean flag to indicate if the certificate should be active */
    active:           any;
    /** (Optional) The certificate signing request. Review */
    csr?:             any;
    /** (Optional) The certificate to be registered. If `ca_pem` is unspecified, review */
    certificate_pem?: any;
    /** (Optional) The CA certificate for the certificate to be registered. If this is set, the CA needs to be registered with AWS IoT beforehand. */
    ca_pem?:          any;
}