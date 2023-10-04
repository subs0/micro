export interface RedshiftSnapshotSchedule {
    resource: Resource[];
}

export interface Resource {
    redshift_snapshot_schedule: RedshiftSnapshotScheduleClass;
}

export interface RedshiftSnapshotScheduleClass {
    /** (Optional, Forces new resource) The snapshot schedule identifier. If omitted, Terraform will assign a random, unique identifier. */
    identifier?:        any;
    /** (Optional, Forces new resource) Creates a unique */
    identifier_prefix?: any;
    /** (Optional) The description of the snapshot schedule. */
    description?:       any;
    /** (Optional) The definition of the snapshot schedule. The definition is made up of schedule expressions, for example `cron(30 12 *)` or `rate(12 hours)`. */
    definitions?:       any;
    /** (Optional) Whether to destroy all associated clusters with this snapshot schedule on deletion. Must be enabled and applied before attempting deletion. */
    force_destroy?:     any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
}