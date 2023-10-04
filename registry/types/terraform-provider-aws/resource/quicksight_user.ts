export interface QuicksightUser {
    resource: Resource[];
}

export interface Resource {
    quicksight_user: QuicksightUserClass;
}

export interface QuicksightUserClass {
    /** (Required) The email address of the user that you want to register. */
    email:           any;
    /** (Required) Amazon QuickSight supports several ways of managing the identity of users. This parameter accepts either  `IAM` or `QUICKSIGHT`. If `IAM` is specified, the `iam_arn` must also be specified. */
    identity_type:   any;
    /** (Required) The Amazon QuickSight role of the user. The user role can be one of the following: `READER`, `AUTHOR`, or `ADMIN` */
    user_role:       any;
    /** (Optional) The Amazon QuickSight user name that you want to create for the user you are registering. Only valid for registering a user with `identity_type` set to `QUICKSIGHT`. */
    user_name?:      any;
    /** (Optional) The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account. */
    aws_account_id?: any;
    /** (Optional) The ARN of the IAM user or role that you are registering with Amazon QuickSight. */
    iam_arn?:        any;
    /** (Optional) The name of the IAM session to use when assuming roles that can embed QuickSight dashboards. Only valid for registering users using an assumed IAM role. Additionally, if registering multiple users using the same IAM role, each user needs to have a unique session name. */
    session_name?:   any;
}