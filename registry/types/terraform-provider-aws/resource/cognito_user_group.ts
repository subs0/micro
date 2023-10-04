export interface CognitoUserGroup {
    resource: Resource[];
}

export interface Resource {
    cognito_user_group: CognitoUserGroupClass;
}

export interface CognitoUserGroupClass {
    /** (Required) The name of the user group. */
    name:         any;
    /** (Required) The user pool ID. */
    user_pool_id: any;
    /** (Optional) The description of the user group. */
    description?: any;
    /** (Optional) The precedence of the user group. */
    precedence?:  any;
    /** (Optional) The ARN of the IAM role to be associated with the user group. */
    role_arn?:    any;
}