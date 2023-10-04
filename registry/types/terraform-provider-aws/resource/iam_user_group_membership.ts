export interface IamUserGroupMembership {
    resource: Resource[];
}

export interface Resource {
    iam_user_group_membership: IamUserGroupMembershipClass;
}

export interface IamUserGroupMembershipClass {
    /** (Required) The name of the [IAM User][2] to add to groups */
    user:   any;
    /** (Required) A list of [IAM Groups][1] to add the user to */
    groups: any;
}