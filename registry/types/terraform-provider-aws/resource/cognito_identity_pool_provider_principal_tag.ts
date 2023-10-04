export interface CognitoIdentityPoolProviderPrincipalTag {
    resource: Resource[];
}

export interface Resource {
    cognito_identity_pool_provider_principal_tag: CognitoIdentityPoolProviderPrincipalTagClass;
}

export interface CognitoIdentityPoolProviderPrincipalTagClass {
    "This resource supports the following arguments:"?: any;
}