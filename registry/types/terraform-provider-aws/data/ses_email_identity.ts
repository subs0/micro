export interface SesEmailIdentity {
    data: Datum[];
}

export interface Datum {
    ses_email_identity: SesEmailIdentityClass;
}

export interface SesEmailIdentityClass {
}