export interface SesDomainIdentityVerification {
    resource: Resource[];
}

export interface Resource {
    ses_domain_identity_verification: SesDomainIdentityVerificationClass;
}

export interface SesDomainIdentityVerificationClass {
    /** (Required) The domain name of the SES domain identity to verify. */
    domain: any;
}