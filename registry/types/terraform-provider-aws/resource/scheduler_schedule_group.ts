export interface SchedulerScheduleGroup {
    resource: Resource[];
}

export interface Resource {
    scheduler_schedule_group: SchedulerScheduleGroupClass;
}

export interface SchedulerScheduleGroupClass {
    /** (Optional, Forces new resource) Name of the schedule group. If omitted, Terraform will assign a random, unique name. Conflicts with `name_prefix`. */
    name?:        any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?: any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}