export interface QuicksightGroupMembership {
    resource: Resource[];
}

export interface Resource {
    quicksight_group_membership: QuicksightGroupMembershipClass;
}

export interface QuicksightGroupMembershipClass {
    /** (Required) The name of the group in which the member will be added. */
    group_name:      any;
    /** (Required) The name of the member to add to the group. */
    member_name:     any;
    /** (Optional) The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account. */
    aws_account_id?: any;
    /** (Required) The namespace that you want the user to be a part of. Defaults to `default`. */
    namespace:       any;
}