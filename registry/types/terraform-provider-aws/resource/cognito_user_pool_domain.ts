export interface CognitoUserPoolDomain {
    resource: Resource[];
}

export interface Resource {
    cognito_user_pool_domain: CognitoUserPoolDomainClass;
}

export interface CognitoUserPoolDomainClass {
    /** (Required) For custom domains, this is the fully-qualified domain name, such as auth.example.com. For Amazon Cognito prefix domains, this is the prefix alone, such as auth. */
    domain:           any;
    /** (Required) The user pool ID. */
    user_pool_id:     any;
    /** (Optional) The ARN of an ISSUED ACM certificate in us-east-1 for a custom domain. */
    certificate_arn?: any;
}