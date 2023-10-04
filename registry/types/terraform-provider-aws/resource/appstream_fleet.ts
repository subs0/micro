export interface AppstreamFleet {
    resource: Resource[];
}

export interface Resource {
    appstream_fleet: AppstreamFleetClass;
}

export interface AppstreamFleetClass {
    /** (Required) Configuration block for the desired capacity of the fleet. See below. */
    compute_capacity:                        any;
    /** (Required) Instance type to use when launching fleet instances. */
    instance_type:                           any;
    /** (Required) Unique name for the fleet. */
    name:                                    any;
    /** (Optional) Description to display. */
    description?:                            any;
    /** (Optional) Amount of time that a streaming session remains active after users disconnect. */
    disconnect_timeout_in_seconds?:          any;
    /** (Optional) Human-readable friendly name for the AppStream fleet. */
    display_name?:                           any;
    /** (Optional) Configuration block for the name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. See below. */
    domain_join_info?:                       any;
    /** (Optional) Enables or disables default internet access for the fleet. */
    enable_default_internet_access?:         any;
    /** (Optional) Fleet type. Valid values are: `ON_DEMAND`, `ALWAYS_ON` */
    fleet_type?:                             any;
    /** (Optional) ARN of the IAM role to apply to the fleet. */
    iam_role_arn?:                           any;
    /** (Optional) Amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the `disconnect_timeout_in_seconds` time interval begins. */
    idle_disconnect_timeout_in_seconds?:     any;
    /** (Optional) Name of the image used to create the fleet. */
    image_name?:                             any;
    /** (Optional) ARN of the public, private, or shared image to use. */
    image_arn?:                              any;
    /** (Optional) AppStream 2.0 view that is displayed to your users when they stream from the fleet. When `APP` is specified, only the windows of applications opened by users display. When `DESKTOP` is specified, the standard desktop that is provided by the operating system displays. If not specified, defaults to `APP`. */
    stream_view?:                            any;
    /** (Optional) Maximum amount of time that a streaming session can remain active, in seconds. */
    max_user_duration_in_seconds?:           any;
    /** (Optional) Configuration block for the VPC configuration for the image builder. See below. */
    vpc_config?:                             any;
    /** (Optional) Map of tags to attach to AppStream instances. */
    tags?:                                   any;
    /** (Required) Desired number of streaming instances. */
    desired_instances:                       any;
    /** (Optional) Fully qualified name of the directory (for example, corp.example.com). */
    directory_name?:                         any;
    /** (Optional) Distinguished name of the organizational unit for computer accounts. */
    organizational_unit_distinguished_name?: any;
    /** Identifiers of the security groups for the fleet or image builder. */
    security_group_ids?:                     any;
    /** Identifiers of the subnets to which a network interface is attached from the fleet instance or image builder instance. */
    subnet_ids?:                             any;
}