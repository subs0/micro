export interface IotThingGroupMembership {
    resource: Resource[];
}

export interface Resource {
    iot_thing_group_membership: IotThingGroupMembershipClass;
}

export interface IotThingGroupMembershipClass {
    /** (Required) The name of the thing to add to a group. */
    thing_name:              any;
    /** (Required) The name of the group to which you are adding a thing. */
    thing_group_name:        any;
    /** (Optional) Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group. */
    override_dynamic_group?: any;
}