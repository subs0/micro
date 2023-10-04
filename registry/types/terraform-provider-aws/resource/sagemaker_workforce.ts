export interface SagemakerWorkforce {
    resource: Resource[];
}

export interface Resource {
    sagemaker_workforce: SagemakerWorkforceClass;
}

export interface SagemakerWorkforceClass {
    /** (Required) The name of the Workforce (must be unique). */
    workforce_name:         any;
    /** (Optional) Use this parameter to configure an Amazon Cognito private workforce. A single Cognito workforce is created using and corresponds to a single Amazon Cognito user pool. Conflicts with `oidc_config`. see [Cognito Config](#cognito-config) details below. */
    cognito_config?:        any;
    /** (Optional) Use this parameter to configure a private workforce using your own OIDC Identity Provider. Conflicts with `cognito_config`. see [OIDC Config](#oidc-config) details below. */
    oidc_config?:           any;
    /** (Optional) A list of IP address ranges Used to create an allow list of IP addresses for a private workforce. By default, a workforce isn't restricted to specific IP addresses. see [Source Ip Config](#source-ip-config) details below. */
    source_ip_config?:      any;
    /** (Optional) configure a workforce using VPC. see [Workforce VPC Config](#workforce-vpc-config) details below. */
    workforce_vpc_config?:  any;
    /** (Required) The OIDC IdP client ID used to configure your private workforce. */
    client_id:              any;
    /** (Required) ID for your Amazon Cognito user pool. */
    user_pool:              any;
    /** (Required) The OIDC IdP authorization endpoint used to configure your private workforce. */
    authorization_endpoint: any;
    /** (Required) The OIDC IdP client secret used to configure your private workforce. */
    client_secret:          any;
    /** (Required) The OIDC IdP issuer used to configure your private workforce. */
    issuer:                 any;
    /** (Required) The OIDC IdP JSON Web Key Set (Jwks) URI used to configure your private workforce. */
    jwks_uri:               any;
    /** (Required) The OIDC IdP logout endpoint used to configure your private workforce. */
    logout_endpoint:        any;
    /** (Required) The OIDC IdP token endpoint used to configure your private workforce. */
    token_endpoint:         any;
    /** (Required) The OIDC IdP user information endpoint used to configure your private workforce. */
    user_info_endpoint:     any;
    /** (Required) A list of up to 10 CIDR values. */
    cidrs:                  any;
    /** (Optional) The VPC security group IDs. The security groups must be for the same VPC as specified in the subnet. */
    security_group_ids?:    any;
    /** (Optional) The ID of the subnets in the VPC that you want to connect. */
    subnets?:               any;
    /** (Optional) The ID of the VPC that the workforce uses for communication. */
    vpc_id?:                any;
}