export interface SesDomainDKIM {
    resource: Resource[];
}

export interface Resource {
    ses_domain_dkim: SesDomainDKIMClass;
}

export interface SesDomainDKIMClass {
    /** (Required) Verified domain name to generate DKIM tokens for. */
    domain: any;
}