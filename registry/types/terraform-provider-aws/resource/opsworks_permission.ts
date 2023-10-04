export interface OpsworksPermission {
    resource: Resource[];
}

export interface Resource {
    opsworks_permission: OpsworksPermissionClass;
}

export interface OpsworksPermissionClass {
    /** (Optional) Whether the user is allowed to use SSH to communicate with the instance */
    allow_ssh?:  any;
    /** (Optional) Whether the user is allowed to use sudo to elevate privileges */
    allow_sudo?: any;
    /** (Required) The user's IAM ARN to set permissions for */
    user_arn:    any;
    /** (Optional) The users permission level. Mus be one of `deny`, `show`, `deploy`, `manage`, `iam_only` */
    level?:      any;
    /** (Required) The stack to set the permissions for */
    stack_id:    any;
}