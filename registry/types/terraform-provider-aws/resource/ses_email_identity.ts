export interface SesEmailIdentity {
    resource: Resource[];
}

export interface Resource {
    ses_email_identity: SesEmailIdentityClass;
}

export interface SesEmailIdentityClass {
    /** (Required) The email address to assign to SES. */
    email: any;
}