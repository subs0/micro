export interface Sesv2EmailIdentityMailFromAttributes {
    resource: Resource[];
}

export interface Resource {
    sesv2_email_identity_mail_from_attributes: Sesv2EmailIdentityMailFromAttributesClass;
}

export interface Sesv2EmailIdentityMailFromAttributesClass {
    /** (Required) The verified email identity. */
    email_identity:          any;
    /** (Optional) The action to take if the required MX record isn't found when you send an email. Valid values: `USE_DEFAULT_VALUE`, `REJECT_MESSAGE`. */
    behavior_on_mx_failure?: any;
    /** (Optional) The custom MAIL FROM domain that you want the verified identity to use. Required if `behavior_on_mx_failure` is `REJECT_MESSAGE`. */
    mail_from_domain?:       any;
}