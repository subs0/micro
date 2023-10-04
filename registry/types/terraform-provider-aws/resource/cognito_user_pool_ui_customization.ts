export interface CognitoUserPoolUICustomization {
    resource: Resource[];
}

export interface Resource {
    cognito_user_pool_ui_customization: CognitoUserPoolUICustomizationClass;
}

export interface CognitoUserPoolUICustomizationClass {
    "This resource supports the following arguments:"?: any;
}