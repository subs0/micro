export interface GameliftFleet {
    resource: Resource[];
}

export interface Resource {
    gamelift_fleet: GameliftFleetClass;
}

export interface GameliftFleetClass {
    /** (Optional) ID of the GameLift Build to be deployed on the fleet. */
    build_id?:                                any;
    /** (Optional) Prompts GameLift to generate a TLS/SSL certificate for the fleet. See [certificate_configuration](#certificate_configuration). */
    certificate_configuration?:               any;
    /** (Optional) Human-readable description of the fleet. */
    description?:                             any;
    /** (Optional) Range of IP addresses and port settings that permit inbound traffic to access server processes running on the fleet. See below. */
    ec2_inbound_permission?:                  any;
    /** (Required) Name of an EC2 instance typeE.g., `t2.micro` */
    ec2_instance_type:                        any;
    /** (Optional) Type of fleet. This value must be `ON_DEMAND` or `SPOT`. Defaults to `ON_DEMAND`. */
    fleet_type?:                              any;
    /** (Optional) ARN of an IAM role that instances in the fleet can assume. */
    instance_role_arn?:                       any;
    /** (Optional) List of names of metric groups to add this fleet to. A metric group tracks metrics across all fleets in the group. Defaults to `default`. */
    metric_groups?:                           any;
    /** (Required) The name of the fleet. */
    name:                                     any;
    /** (Optional) Game session protection policy to apply to all instances in this fleetE.g., `FullProtection`. Defaults to `NoProtection`. */
    new_game_session_protection_policy?:      any;
    /** (Optional) Policy that limits the number of game sessions an individual player can create over a span of time for this fleet. See below. */
    resource_creation_limit_policy?:          any;
    /** (Optional) Instructions for launching server processes on each instance in the fleet. See below. */
    runtime_configuration?:                   any;
    /** (Optional) ID of the GameLift Script to be deployed on the fleet. */
    script_id?:                               any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                    any;
    /** (Optional) Indicates whether a TLS/SSL certificate is generated for a fleet. Valid values are `DISABLED` and `GENERATED`. Default value is `DISABLED`. */
    certificate_type?:                        any;
    /** (Required) Starting value for a range of allowed port numbers. */
    from_port:                                any;
    /** (Required) Range of allowed IP addresses expressed in CIDR notationE.g., `000.000.000.000/[subnet mask]` or `0.0.0.0/[subnet mask]`. */
    ip_range:                                 any;
    /** (Required) Network communication protocol used by the fleetE.g., `TCP` or `UDP` */
    protocol:                                 any;
    /** (Required) Ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than `from_port`. */
    to_port:                                  any;
    /** (Optional) Maximum number of game sessions that an individual can create during the policy period. */
    new_game_sessions_per_creator?:           any;
    /** (Optional) Time span used in evaluating the resource creation limit policy. */
    policy_period_in_minutes?:                any;
    /** (Optional) Maximum amount of time (in seconds) that a game session can remain in status `ACTIVATING`. */
    game_session_activation_timeout_seconds?: any;
    /** (Optional) Maximum number of game sessions with status `ACTIVATING` to allow on an instance simultaneously. */
    max_concurrent_game_session_activations?: any;
    /** (Optional) Collection of server process configurations that describe which server processes to run on each instance in a fleet. See below. */
    server_process?:                          any;
    /** (Required) Number of server processes using this configuration to run concurrently on an instance. */
    concurrent_executions:                    any;
    /** (Required) Location of the server executable in a game build. All game builds are installed on instances at the root : for Windows instances `C:\game`, and for Linux instances `/local/game`. */
    launch_path:                              any;
    /** (Optional) Optional list of parameters to pass to the server executable on launch. */
    parameters?:                              any;
}