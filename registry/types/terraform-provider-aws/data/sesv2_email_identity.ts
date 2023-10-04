export interface Sesv2EmailIdentity {
    data: Datum[];
}

export interface Datum {
    sesv2_email_identity: Sesv2EmailIdentityClass;
}

export interface Sesv2EmailIdentityClass {
    /** (Required) The name of the email identity. */
    email_identity: any;
}