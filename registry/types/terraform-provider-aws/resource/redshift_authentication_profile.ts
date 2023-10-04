export interface RedshiftAuthenticationProfile {
    resource: Resource[];
}

export interface Resource {
    redshift_authentication_profile: RedshiftAuthenticationProfileClass;
}

export interface RedshiftAuthenticationProfileClass {
    /** (Required, Forces new resource) The name of the authentication profile. */
    authentication_profile_name?:   any;
    /** (Required) The content of the authentication profile in JSON format. The maximum length of the JSON string is determined by a quota for your account. */
    authentication_profile_content: any;
}