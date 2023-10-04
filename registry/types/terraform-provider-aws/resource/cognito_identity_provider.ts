export interface CognitoIdentityProvider {
    resource: Resource[];
}

export interface Resource {
    cognito_identity_provider: CognitoIdentityProviderClass;
}

export interface CognitoIdentityProviderClass {
    "This resource supports the following arguments:"?: any;
}