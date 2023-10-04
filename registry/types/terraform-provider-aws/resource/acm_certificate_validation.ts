export interface ACMCertificateValidation {
    resource: Resource[];
}

export interface Resource {
    acm_certificate_validation: ACMCertificateValidationClass;
}

export interface ACMCertificateValidationClass {
    /** (Required) ARN of the certificate that is being validated. */
    certificate_arn:          any;
    /** (Optional) List of FQDNs that implement the validation. Only valid for DNS validation method ACM certificates. If this is set, the resource can implement additional sanity checks and has an explicit dependency on the resource that is implementing the validation */
    validation_record_fqdns?: any;
}