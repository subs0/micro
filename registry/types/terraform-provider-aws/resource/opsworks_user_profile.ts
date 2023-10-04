export interface OpsworksUserProfile {
    resource: Resource[];
}

export interface Resource {
    opsworks_user_profile: OpsworksUserProfileClass;
}

export interface OpsworksUserProfileClass {
    /** (Required) The user's IAM ARN */
    user_arn:               any;
    /** (Optional) Whether users can specify their own SSH public key through the My Settings page */
    allow_self_management?: any;
    /** (Required) The ssh username, with witch this user wants to log in */
    ssh_username:           any;
    /** (Optional) The users public key */
    ssh_public_key?:        any;
}