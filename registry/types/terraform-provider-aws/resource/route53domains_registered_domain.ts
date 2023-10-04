export interface Route53DomainsRegisteredDomain {
    resource: Resource[];
}

export interface Resource {
    route53domains_registered_domain: Route53DomainsRegisteredDomainClass;
}

export interface Route53DomainsRegisteredDomainClass {
    /** (Optional) Details about the domain administrative contact. */
    admin_contact?:      any;
    /** (Optional) Whether domain administrative contact information is concealed from WHOIS queries. Default: `true`. */
    admin_privacy?:      any;
    /** (Optional) Whether the domain registration is set to renew automatically. Default: `true`. */
    auto_renew?:         any;
    /** (Required) The name of the registered domain. */
    domain_name:         any;
    /** (Optional) The list of nameservers for the domain. */
    name_server?:        any;
    /** (Optional) Details about the domain registrant. */
    registrant_contact?: any;
    /** (Optional) Whether domain registrant contact information is concealed from WHOIS queries. Default: `true`. */
    registrant_privacy?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
    /** (Optional) Details about the domain technical contact. */
    tech_contact?:       any;
    /** (Optional) Whether domain technical contact information is concealed from WHOIS queries. Default: `true`. */
    tech_privacy?:       any;
    /** (Optional) Whether the domain is locked for transfer. Default: `true`. */
    transfer_lock?:      any;
    /** (Optional) First line of the contact's address. */
    address_line_1?:     any;
    /** (Optional) Second line of contact's address, if any. */
    address_line_2?:     any;
    /** (Optional) The city of the contact's address. */
    city?:               any;
    /** (Optional) Indicates whether the contact is a person, company, association, or public organization. See the [AWS API documentation](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html#Route53Domains-Type-domains_ContactDetail-ContactType) for valid values. */
    contact_type?:       any;
    /** (Optional) Code for the country of the contact's address. See the [AWS API documentation](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ContactDetail.html#Route53Domains-Type-domains_ContactDetail-CountryCode) for valid values. */
    country_code?:       any;
    /** (Optional) Email address of the contact. */
    email?:              any;
    /** (Optional) A key-value map of parameters required by certain top-level domains. */
    extra_params?:       any;
    /** (Optional) Fax number of the contact. Phone number must be specified in the format "+[country dialing code].[number including any area code]". */
    fax?:                any;
    /** (Optional) First name of contact. */
    first_name?:         any;
    /** (Optional) Last name of contact. */
    last_name?:          any;
    /** (Optional) Name of the organization for contact types other than `PERSON`. */
    organization_name?:  any;
    /** (Optional) The phone number of the contact. Phone number must be specified in the format "+[country dialing code].[number including any area code]". */
    phone_number?:       any;
    /** (Optional) The state or province of the contact's city. */
    state?:              any;
    /** (Optional) The zip or postal code of the contact's address. */
    zip_code?:           any;
    /** (Optional) Glue IP addresses of a name server. The list can contain only one IPv4 and one IPv6 address. */
    glue_ips?:           any;
    /** (Required) The fully qualified host name of the name server. */
    name:                any;
}