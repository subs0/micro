export interface SesDomainMailFrom {
    resource: Resource[];
}

export interface Resource {
    ses_domain_mail_from: SesDomainMailFromClass;
}

export interface SesDomainMailFromClass {
    /** (Required) Verified domain name or email identity to generate DKIM tokens for. */
    domain:                  any;
    /** (Required) Subdomain (of above domain) which is to be used as MAIL FROM address (Required for DMARC validation) */
    mail_from_domain:        any;
    /** (Optional) The action that you want Amazon SES to take if it cannot successfully read the required MX record when you send an email. Defaults to `UseDefaultValue`. See the [SES API documentation](https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityMailFromDomain.html) for more information. */
    behavior_on_mx_failure?: any;
}