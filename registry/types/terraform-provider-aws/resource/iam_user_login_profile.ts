export interface IamUserLoginProfile {
    resource: Resource[];
}

export interface Resource {
    iam_user_login_profile: IamUserLoginProfileClass;
}

export interface IamUserLoginProfileClass {
    /** (Required) The IAM user's name. */
    user:                     any;
    /** (Optional) Either a base-64 encoded PGP public key, or a keybase username in the form `keybase:username`. Only applies on resource creation. Drift detection is not possible with this argument. */
    pgp_key?:                 any;
    /** (Optional) The length of the generated password on resource creation. Only applies on resource creation. Drift detection is not possible with this argument. Default value is `20`. */
    password_length?:         any;
    /** (Optional) Whether the user should be forced to reset the generated password on resource creation. Only applies on resource creation. */
    password_reset_required?: any;
}