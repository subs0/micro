export interface ElasticacheUser {
    resource: Resource[];
}

export interface Resource {
    elasticache_user: ElasticacheUserClass;
}

export interface ElasticacheUserClass {
    access_any:         string;
    /** (Required) The current supported value is `REDIS`. */
    engine:                any;
    /** (Required) The ID of the user. */
    user_id:               any;
    /** (Required) The username of the user. */
    user_name:             any;
    /** (Optional) Denotes the user's authentication properties. Detailed below. */
    authentication_mode?:  any;
    /** (Optional) Indicates a password is not required for this user. */
    no_password_required?: any;
    /** (Optional) Specifies the passwords to use for authentication if `type` is set to `password`. */
    passwords?:            any;
    /** (Optional) A list of tags to be added to this resource. A tag is a key-value pair. */
    tags?:                 any;
    /** (Required) Specifies the authentication type. Possible options are: `password`, `no-password-required` or `iam`. */
    type:                  any;
}