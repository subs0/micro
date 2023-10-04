export interface Sesv2EmailIdentityMailFromAttributes {
    data: Datum[];
}

export interface Datum {
    sesv2_email_identity_mail_from_attributes: Sesv2EmailIdentityMailFromAttributesClass;
}

export interface Sesv2EmailIdentityMailFromAttributesClass {
    /** (Required) The name of the email identity. */
    email_identity: any;
}