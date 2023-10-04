export interface IotAuthorizer {
    resource: Resource[];
}

export interface Resource {
    iot_authorizer: IotAuthorizerClass;
}

export interface IotAuthorizerClass {
    /** (Required) The ARN of the authorizer's Lambda function. */
    authorizer_function_arn:    any;
    /** (Required) The name of the authorizer. */
    name:                       any;
    /** (Optional) Specifies whether AWS IoT validates the token signature in an authorization request. Default: `false`. */
    signing_disabled?:          any;
    /** (Optional) The status of Authorizer request at creation. Valid values: `ACTIVE`, `INACTIVE`. Default: `ACTIVE`. */
    status?:                    any;
    /** (Optional) The name of the token key used to extract the token from the HTTP headers. This value is required if signing is enabled in your authorizer. */
    token_key_name?:            any;
    /** (Optional) The public keys used to verify the digital signature returned by your custom authentication service. This value is required if signing is enabled in your authorizer. */
    token_signing_public_keys?: any;
}