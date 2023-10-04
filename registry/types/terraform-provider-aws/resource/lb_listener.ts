export interface LBListener {
    resource: Resource[];
}

export interface Resource {
    lb_listener: LBListenerClass;
}

export interface LBListenerClass {
    default_action:     DefaultAction;
    /** (Required, Forces New Resource) ARN of the load balancer. */
    load_balancer_arn?: any;
    /** (Optional)  Name of the Application-Layer Protocol Negotiation (ALPN) policy. Can be set if `protocol` is `TLS`. Valid values are `HTTP1Only`, `HTTP2Only`, `HTTP2Optional`, `HTTP2Preferred`, and `None`. */
    alpn_policy?:       any;
    /** (Optional) ARN of the default SSL server certificate. Exactly one certificate is required if the protocol is HTTPS. For adding additional SSL certificates, see the [`aws_lb_listener_certificate` resource](/docs/providers/aws/r/lb_listener_certificate.html). */
    certificate_arn?:   any;
    /** (Optional) Name of the SSL Policy for the listener. Required if `protocol` is `HTTPS` or `TLS`. */
    ssl_policy?:        any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
}

export interface DefaultAction {
    /** (Required) Type of routing action. Valid values are `forward`, `redirect`, `fixed-response`, `authenticate-cognito` and `authenticate-oidc`. */
    type:                                 any;
    /** (Optional) Configuration block for using Amazon Cognito to authenticate users. Specify only when `type` is `authenticate-cognito`. Detailed below. */
    authenticate_cognito?:                any;
    /** (Optional) Configuration block for an identity provider that is compliant with OpenID Connect (OIDC). Specify only when `type` is `authenticate-oidc`. Detailed below. */
    authenticate_oidc?:                   any;
    /** (Optional) Information for creating an action that returns a custom HTTP response. Required if `type` is `fixed-response`. */
    fixed_response?:                      any;
    /** (Optional) Configuration block for creating an action that distributes requests among one or more target groups. Specify only if `type` is `forward`. If you specify both `forward` block and `target_group_arn` attribute, you can specify only one target group using `forward` and it must be the same target group specified in `target_group_arn`. Detailed below. */
    forward?:                             any;
    /** (Optional) Order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first. Valid values are between `1` and `50000`. */
    order?:                               any;
    /** (Optional) Configuration block for creating a redirect action. Required if `type` is `redirect`. Detailed below. */
    redirect?:                            any;
    /** (Optional) ARN of the Target Group to which to route traffic. Specify only if `type` is `forward` and you want to route to a single target group. To route to one or more target groups, use a `forward` block instead. */
    target_group_arn?:                    any;
    /** (Required) ARN of the Cognito user pool. */
    user_pool_arn:                        any;
    /** (Required) ID of the Cognito user pool client. */
    user_pool_client_id:                  any;
    /** (Required) Domain prefix or fully-qualified domain name of the Cognito user pool. */
    user_pool_domain:                     any;
    /** (Optional) Query parameters to include in the redirect request to the authorization endpoint. Max: 10. */
    authentication_request_extra_params?: any;
    /** (Optional) Behavior if the user is not authenticated. Valid values: `deny`, `allow` and `authenticate` */
    on_unauthenticated_request?:          any;
    /** (Optional) Set of user claims to be requested from the IdP. */
    scope?:                               any;
    /** (Optional) Name of the cookie used to maintain session information. */
    session_cookie_name?:                 any;
    /** (Optional) Maximum duration of the authentication session, in seconds. */
    session_timeout?:                     any;
    /** (Required) Key of query parameter. */
    key:                                  any;
    /** (Required) Value of query parameter. */
    value:                                any;
    /** (Required) Authorization endpoint of the IdP. */
    authorization_endpoint:               any;
    /** (Required) OAuth 2.0 client identifier. */
    client_id:                            any;
    /** (Required) OAuth 2.0 client secret. */
    client_secret:                        any;
    /** (Required) OIDC issuer identifier of the IdP. */
    issuer:                               any;
    /** (Required) Token endpoint of the IdP. */
    token_endpoint:                       any;
    /** (Required) User info endpoint of the IdP. */
    user_info_endpoint:                   any;
    /** (Required) Content type. Valid values are `text/plain`, `text/css`, `text/html`, `application/javascript` and `application/json`. */
    content_type:                         any;
    /** (Optional) Message body. */
    message_body?:                        any;
    /** (Required) HTTP redirect code. The redirect is either permanent (`HTTP_301`) or temporary (`HTTP_302`). */
    status_code:                          any;
    /** (Required) Set of 1-5 target group blocks. Detailed below. */
    target_group:                         any;
    /** (Optional) Configuration block for target group stickiness for the rule. Detailed below. */
    stickiness?:                          any;
    /** (Required) ARN of the target group. */
    arn:                                  any;
    /** (Optional) Weight. The range is 0 to 999. */
    weight?:                              any;
    /** (Required) Time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days). */
    duration:                             any;
    /** (Optional) Whether target group stickiness is enabled. Default is `false`. */
    enabled?:                             any;
    /** (Optional) Hostname. This component is not percent-encoded. The hostname can contain `#{host}`. Defaults to `#{host}`. */
    host?:                                any;
    /** (Optional) Absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}. Defaults to `/#{path}`. */
    path?:                                any;
    /** (Optional) Port. Specify a value from `1` to `65535` or `#{port}`. Defaults to `#{port}`. */
    port?:                                any;
    /** (Optional) Protocol. Valid values are `HTTP`, `HTTPS`, or `#{protocol}`. Defaults to `#{protocol}`. */
    protocol?:                            any;
    /** (Optional) Query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?". Defaults to `#{query}`. */
    query?:                               any;
}