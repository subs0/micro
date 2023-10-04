export interface SesDomainIdentity {
    data: Datum[];
}

export interface Datum {
    ses_domain_identity: SesDomainIdentityClass;
}

export interface SesDomainIdentityClass {
}