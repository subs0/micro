export interface CognitoUserInGroup {
    resource: Resource[];
}

export interface Resource {
    cognito_user_in_group: CognitoUserInGroupClass;
}

export interface CognitoUserInGroupClass {
    /** (Required) The user pool ID of the user and group. */
    user_pool_id: any;
    /** (Required) The name of the group to which the user is to be added. */
    group_name:   any;
    /** (Required) The username of the user to be added to the group. */
    username:     any;
}