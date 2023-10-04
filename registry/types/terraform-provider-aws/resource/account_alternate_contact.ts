export interface AccountAlternateContact {
    resource: Resource[];
}

export interface Resource {
    account_alternate_contact: AccountAlternateContactClass;
}

export interface AccountAlternateContactClass {
    /** (Optional) ID of the target account when managing member accounts. Will manage current user's account by default if omitted. */
    account_id?:            any;
    /** (Required) Type of the alternate contact. Allowed values are: `BILLING`, `OPERATIONS`, `SECURITY`. */
    alternate_contact_type: any;
    /** (Required) An email address for the alternate contact. */
    email_address:          any;
    /** (Required) Name of the alternate contact. */
    name:                   any;
    /** (Required) Phone number for the alternate contact. */
    phone_number:           any;
    /** (Required) Title for the alternate contact. */
    title:                  any;
}