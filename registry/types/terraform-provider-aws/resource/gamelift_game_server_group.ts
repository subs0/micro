export interface GameliftGameServerGroup {
    resource: Resource[];
}

export interface Resource {
    gamelift_game_server_group: GameliftGameServerGroupClass;
}

export interface GameliftGameServerGroupClass {
    /** (Optional) Indicates how GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances. */
    balancing_strategy?:            any;
    /** (Required) Name of the game server group. */
    game_server_group_name:         any;
    /** (Optional) Indicates whether instances in the game server group are protected from early termination. */
    game_server_protection_policy?: any;
    /** (Required) The maximum number of instances allowed in the EC2 Auto Scaling group. */
    max_size:                       any;
    /** (Required) The minimum number of instances allowed in the EC2 Auto Scaling group. */
    min_size:                       any;
    /** (Required) ARN for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups. */
    role_arn:                       any;
    /** (Optional) Key-value map of resource tags */
    tags?:                          any;
    /** (Optional) A list of VPC subnets to use with instances in the game server group. */
    vpc_subnets?:                   any;
    /** (Optional) Length of time, in seconds, it takes for a new instance to start */
    estimated_instance_warmup?:     any;
    /** (Required) Desired value to use with a game server group target-based scaling policy. */
    target_value:                   any;
    /** (Required) An EC2 instance type. */
    instance_type:                  any;
    /** (Optional) Instance weighting that indicates how much this instance type contributes */
    weighted_capacity?:             any;
    /** (Optional) A unique identifier for an existing EC2 launch template. */
    id?:                            any;
    /** (Optional) A readable identifier for an existing EC2 launch template. */
    name?:                          any;
    /** (Optional) The version of the EC2 launch template to use. If none is set, the default is the first version created. */
    version?:                       any;
}