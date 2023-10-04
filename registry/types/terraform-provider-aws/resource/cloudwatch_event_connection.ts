export interface CloudwatchEventConnection {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_event_connection: CloudwatchEventConnectionClass;
}

export interface CloudwatchEventConnectionClass {
    /** (Required) The name of the new connection. Maximum of 64 characters consisting of numbers, lower/upper case letters, .,-,_. */
    name:                        any;
    /** (Optional) Enter a description for the connection. Maximum of 512 characters. */
    description?:                any;
    /** (Required) Choose the type of authorization to use for the connection. One of `API_KEY`,`BASIC`,`OAUTH_CLIENT_CREDENTIALS`. */
    authorization_type:          any;
    /** (Required) Parameters used for authorization. A maximum of 1 are allowed. Documented below. */
    auth_parameters:             any;
    /** (Optional) Invocation Http Parameters are additional credentials used to sign each Invocation of the ApiDestination created from this Connection. If the ApiDestination Rule Target has additional HttpParameters, the values will be merged together, with the Connection Invocation Http Parameters taking precedence. Secret values are stored and managed by AWS Secrets Manager. A maximum of 1 are allowed. Documented below. */
    invocation_http_parameters?: any;
    /** (Optional) Parameters used for API_KEY authorization. An API key to include in the header for each authentication request. A maximum of 1 are allowed. Conflicts with `basic` and `oauth`. Documented below. */
    api_key?:                    any;
    /** (Optional) Parameters used for BASIC authorization. A maximum of 1 are allowed. Conflicts with `api_key` and `oauth`. Documented below. */
    basic?:                      any;
    /** (Optional) Parameters used for OAUTH_CLIENT_CREDENTIALS authorization. A maximum of 1 are allowed. Conflicts with `basic` and `api_key`. Documented below. */
    oauth?:                      any;
    /** (Required) The key for the parameter. */
    key:                         any;
    /** (Required) The value associated with the key. Created and stored in AWS Secrets Manager if is secret. */
    value:                       any;
    /** (Required) A username for the authorization. */
    username:                    any;
    /** (Required) A password for the authorization. Created and stored in AWS Secrets Manager. */
    password:                    any;
    /** (Required) The URL to the authorization endpoint. */
    authorization_endpoint:      any;
    /** (Required) A password for the authorization. Created and stored in AWS Secrets Manager. */
    http_method:                 any;
    /** (Required) Contains the client parameters for OAuth authorization. Contains the following two parameters. */
    client_parameters:           any;
    /** (Required) The client ID for the credentials to use for authorization. Created and stored in AWS Secrets Manager. */
    client_id:                   any;
    /** (Required) The client secret for the credentials to use for authorization. Created and stored in AWS Secrets Manager. */
    client_secret:               any;
    /** (Required) OAuth Http Parameters are additional credentials used to sign the request to the authorization endpoint to exchange the OAuth Client information for an access token. Secret values are stored and managed by AWS Secrets Manager. A maximum of 1 are allowed. Documented below. */
    oauth_http_parameters:       any;
    /** (Optional) Contains additional body string parameters for the connection. You can include up to 100 additional body string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. Each parameter can contain the following: */
    body?:                       any;
    /** (Optional) Specified whether the value is secret. */
    is_value_secret?:            any;
    /** (Optional) Contains additional header parameters for the connection. You can include up to 100 additional body string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. Each parameter can contain the following: */
    header?:                     any;
    query_any?:               string;
}