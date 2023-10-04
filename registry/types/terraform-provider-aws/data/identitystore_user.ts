export interface IdentitystoreUser {
    data: Datum[];
}

export interface Datum {
    identitystore_user: IdentitystoreUserClass;
}

export interface IdentitystoreUserClass {
    /** (Required) Identity Store ID associated with the Single Sign-On Instance. */
    identity_store_id: any;
    /** (Optional, **Deprecated** use the `alternate_identifier` attribute instead) Configuration block for filtering by a unique attribute of the user. Detailed below. */
    filter?:           any;
    /** (Optional) The identifier for a user in the Identity Store. */
    user_id?:          any;
    /** (Optional) Configuration block for filtering by the identifier issued by an external identity provider. Detailed below. */
    external_id?:      any;
    /** (Optional) An entity attribute that's unique to a specific entity. Detailed below. */
    unique_attribute?: any;
    /** (Required) The identifier issued to this resource by an external identity provider. */
    id:                any;
    /** (Required) The issuer for an external identifier. */
    issuer:            any;
    /** (Required) Attribute path that is used to specify which attribute name to search. For example: `UserName`. Refer to the [User data type](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html). */
    attribute_path:    any;
    /** (Required) Value for an attribute. */
    attribute_value:   any;
}