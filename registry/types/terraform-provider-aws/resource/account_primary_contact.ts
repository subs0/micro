export interface AccountPrimaryContact {
    resource: Resource[];
}

export interface Resource {
    account_primary_contact: AccountPrimaryContactClass;
}

export interface AccountPrimaryContactClass {
    /** (Optional) The ID of the target account when managing member accounts. Will manage current user's account by default if omitted. */
    account_id?:         any;
    /** (Required) The first line of the primary contact address. */
    address_line_1:      any;
    /** (Optional) The second line of the primary contact address, if any. */
    address_line_2?:     any;
    /** (Optional) The third line of the primary contact address, if any. */
    address_line_3?:     any;
    /** (Required) The city of the primary contact address. */
    city:                any;
    /** (Optional) The name of the company associated with the primary contact information, if any. */
    company_name?:       any;
    /** (Required) The ISO-3166 two-letter country code for the primary contact address. */
    country_code:        any;
    /** (Optional) The district or county of the primary contact address, if any. */
    district_or_county?: any;
    /** (Required) The full name of the primary contact address. */
    full_name:           any;
    /** (Required) The phone number of the primary contact information. The number will be validated and, in some countries, checked for activation. */
    phone_number:        any;
    /** (Required) The postal code of the primary contact address. */
    postal_code:         any;
    /** (Optional) The state or region of the primary contact address. This field is required in selected countries. */
    state_or_region?:    any;
    /** (Optional) The URL of the website associated with the primary contact information, if any. */
    website_url?:        any;
}