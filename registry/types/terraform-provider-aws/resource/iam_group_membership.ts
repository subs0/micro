export interface IamGroupMembership {
    resource: Resource[];
}

export interface Resource {
    iam_group_membership: IamGroupMembershipClass;
}

export interface IamGroupMembershipClass {
    /** (Required) The name to identify the Group Membership */
    name:  any;
    /** (Required) A list of IAM User names to associate with the Group */
    users: any;
}