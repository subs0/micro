export interface SsmMaintenanceWindow {
    resource: Resource[];
}

export interface Resource {
    ssm_maintenance_window: SsmMaintenanceWindowClass;
}

export interface SsmMaintenanceWindowClass {
    /** (Required) The name of the maintenance window. */
    name:                        any;
    /** (Required) The schedule of the Maintenance Window in the form of a [cron or rate expression](https://docs.aws.amazon.com/systems-manager/latest/userguide/reference-cron-and-rate-expressions.html). */
    schedule:                    any;
    /** (Required) The number of hours before the end of the Maintenance Window that Systems Manager stops scheduling new tasks for execution. */
    cutoff:                      any;
    /** (Required) The duration of the Maintenance Window in hours. */
    duration:                    any;
    /** (Optional) A description for the maintenance window. */
    description?:                any;
    /** (Optional) Whether targets must be registered with the Maintenance Window before tasks can be defined for those targets. */
    allow_unassociated_targets?: any;
    /** (Optional) Whether the maintenance window is enabled. Default: `true`. */
    enabled?:                    any;
    /** (Optional) Timestamp in [ISO-8601 extended format](https://www.iso.org/iso-8601-date-and-time-format.html) when to no longer run the maintenance window. */
    end_date?:                   any;
    /** (Optional) Timezone for schedule in [Internet Assigned Numbers Authority (IANA) Time Zone Database format](https://www.iana.org/time-zones). For example: `America/Los_Angeles`, `etc/UTC`, or `Asia/Seoul`. */
    schedule_timezone?:          any;
    /** (Optional) The number of days to wait after the date and time specified by a CRON expression before running the maintenance window. */
    schedule_offset?:            any;
    /** (Optional) Timestamp in [ISO-8601 extended format](https://www.iso.org/iso-8601-date-and-time-format.html) when to begin the maintenance window. */
    start_date?:                 any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                       any;
}