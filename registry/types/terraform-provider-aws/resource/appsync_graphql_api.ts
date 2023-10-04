export interface AppsyncGraphqlAPI {
    resource: Resource[];
}

export interface Resource {
    appsync_graphql_api: AppsyncGraphqlAPIClass;
}

export interface AppsyncGraphqlAPIClass {
    /** (Required) User-supplied name for the GraphqlApi. */
    name:                                any;
    log_config?:                         LogConfig;
    /** (Optional) Nested argument containing OpenID Connect configuration. Defined below. */
    openid_connect_config?:              OpenidConnectConfig;
    /** (Optional) Amazon Cognito User Pool configuration. Defined below. */
    user_pool_config?:                   UserPoolConfig;
    lambda_authorizer_config?:           LambdaAuthorizerConfig;
    /** (Optional) Schema definition, in GraphQL schema language format. Terraform cannot perform drift detection of this configuration. */
    schema?:                             any;
    additional_authentication_provider?: AdditionalAuthenticationProvider;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                               any;
    /** (Optional) Whether tracing with X-ray is enabled. Defaults to false. */
    xray_enabled?:                       any;
    /** (Optional) Sets the value of the GraphQL API to public (`GLOBAL`) or private (`PRIVATE`). If no value is provided, the visibility will be set to `GLOBAL` by default. This value cannot be changed once the API has been created. */
    visibility?:                         any;
}

export interface AdditionalAuthenticationProvider {
    /** (Required) Authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`, `AWS_LAMBDA` */
    authentication_type:   any;
    /** (Optional) Nested argument containing OpenID Connect configuration. Defined below. */
    openid_connect_config: any;
    /** (Optional) Amazon Cognito User Pool configuration. Defined below. */
    user_pool_config:      any;
}

export interface LambdaAuthorizerConfig {
    /** (Required) ARN of the Lambda function to be called for authorization. Note: This Lambda function must have a resource-based policy assigned to it, to allow `lambda:InvokeFunction` from service principal `appsync.amazonaws.com`. */
    authorizer_uri:                   any;
    /** (Optional) Number of seconds a response should be cached for. The default is 5 minutes (300 seconds). The Lambda function can override this by returning a `ttlOverride` key in its response. A value of 0 disables caching of responses. Minimum value of 0. Maximum value of 3600. */
    authorizer_result_ttl_in_seconds: any;
    /** (Optional) Regular expression for validation of tokens before the Lambda function is called. */
    identity_validation_expression:   any;
}

export interface LogConfig {
    /** (Required) Amazon Resource Name of the service role that AWS AppSync will assume to publish to Amazon CloudWatch logs in your account. */
    cloudwatch_logs_role_arn: any;
    /** (Required) Field logging level. Valid values: `ALL`, `ERROR`, `NONE`. */
    field_log_level:          any;
    /** (Optional) Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging  level. Valid values: `true`, `false`. Default value: `false` */
    exclude_verbose_content:  any;
}

export interface OpenidConnectConfig {
    /** (Required) Issuer for the OpenID Connect configuration. The issuer returned by discovery MUST exactly match the value of iss in the ID Token. */
    issuer:    any;
    /** (Optional) Number of milliseconds a token is valid after being authenticated. */
    auth_ttl:  any;
    /** (Optional) Client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time. */
    client_id: any;
    /** (Optional) Number of milliseconds a token is valid after being issued to a user. */
    iat_ttl:   any;
}

export interface UserPoolConfig {
    /** (Required only if Cognito is used as the default auth provider) Action that you want your GraphQL API to take when a request that uses Amazon Cognito User Pool authentication doesn't match the Amazon Cognito User Pool configuration. Valid: `ALLOW` and `DENY` */
    default_action:      any;
    /** (Required) User pool ID. */
    user_pool_id:        any;
    /** (Optional) Regular expression for validating the incoming Amazon Cognito User Pool app client ID. */
    app_id_client_regex: any;
    /** (Optional) AWS region in which the user pool was created. */
    aws_region:          any;
}