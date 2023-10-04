export interface SesDomainIdentity {
    resource: Resource[];
}

export interface Resource {
    ses_domain_identity: SesDomainIdentityClass;
}

export interface SesDomainIdentityClass {
    /** (Required) The domain name to assign to SES */
    domain: any;
}