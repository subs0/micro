export interface IamSecurityTokenServicePreferences {
    resource: Resource[];
}

export interface Resource {
    iam_security_token_service_preferences: IamSecurityTokenServicePreferencesClass;
}

export interface IamSecurityTokenServicePreferencesClass {
    /** (Required) The version of the STS global endpoint token. Valid values: `v1Token`, `v2Token`. */
    global_endpoint_token_version: any;
}