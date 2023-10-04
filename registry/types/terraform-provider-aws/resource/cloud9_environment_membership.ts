export interface Cloud9EnvironmentMembership {
    resource: Resource[];
}

export interface Resource {
    cloud9_environment_membership: Cloud9EnvironmentMembershipClass;
}

export interface Cloud9EnvironmentMembershipClass {
    /** (Required) The ID of the environment that contains the environment member you want to add. */
    environment_id: any;
    /** (Required) The type of environment member permissions you want to associate with this environment member. Allowed values are `read-only` and `read-write` . */
    permissions:    any;
    /** (Required) The Amazon Resource Name (ARN) of the environment member you want to add. */
    user_arn:       any;
}