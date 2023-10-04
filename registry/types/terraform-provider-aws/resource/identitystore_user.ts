export interface IdentitystoreUser {
    resource: Resource[];
}

export interface Resource {
    identitystore_user: IdentitystoreUserClass;
}

export interface IdentitystoreUserClass {
    /** (Required) The name that is typically displayed when the user is referenced. */
    display_name:        any;
    /** (Required, Forces new resource) The globally unique identifier for the identity store that this user is in. */
    identity_store_id?:  any;
    /** (Required) Details about the user's full name. Detailed below. */
    name:                any;
    /** (Required, Forces new resource) A unique string used to identify the user. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store. The limit is 128 characters. */
    user_name?:          any;
    /** (Optional) Details about the user's address. At most 1 address is allowed. Detailed below. */
    addresses?:          any;
    /** (Optional) Details about the user's email. At most 1 email is allowed. Detailed below. */
    emails?:             any;
    /** (Optional) The user's geographical region or location. */
    locale?:             any;
    /** (Optional) An alternate name for the user. */
    nickname?:           any;
    /** (Optional) Details about the user's phone number. At most 1 phone number is allowed. Detailed below. */
    phone_numbers?:      any;
    /** (Optional) The preferred language of the user. */
    preferred_language?: any;
    /** (Optional) An URL that may be associated with the user. */
    profile_url?:        any;
    /** (Optional) The user's time zone. */
    timezone?:           any;
    /** (Optional) The user's title. */
    title?:              any;
    /** (Optional) The user type. */
    user_type?:          any;
    /** (Optional) The country that this address is in. */
    country?:            any;
    /** (Optional) The name that is typically displayed when the name is shown for display. */
    formatted?:          any;
    /** (Optional) The address locality. */
    locality?:           any;
    /** (Optional) The postal code of the address. */
    postal_code?:        any;
    /** (Optional) When `true`, this is the primary phone number associated with the user. */
    primary?:            any;
    /** (Optional) The region of the address. */
    region?:             any;
    /** (Optional) The street of the address. */
    street_address?:     any;
    /** (Optional) The type of phone number. */
    type?:               any;
    /** (Optional) The user's phone number. */
    value?:              any;
    /** (Required) The family name of the user. */
    family_name:         any;
    /** (Required) The given name of the user. */
    given_name:          any;
    /** (Optional) The honorific prefix of the user. */
    honorific_prefix?:   any;
    /** (Optional) The honorific suffix of the user. */
    honorific_suffix?:   any;
    /** (Optional) The middle name of the user. */
    middle_name?:        any;
}