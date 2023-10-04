export interface CodeartifactAuthorizationToken {
    data: Datum[];
}

export interface Datum {
    codeartifact_authorization_token: CodeartifactAuthorizationTokenClass;
}

export interface CodeartifactAuthorizationTokenClass {
    /** (Required) Name of the domain that is in scope for the generated authorization token. */
    domain:            any;
    /** (Optional) Account number of the AWS account that owns the domain. */
    domain_owner?:     any;
    /** (Optional) Time, in seconds, that the generated authorization token is valid. Valid values are `0` and between `900` and `43200`. */
    duration_seconds?: any;
}