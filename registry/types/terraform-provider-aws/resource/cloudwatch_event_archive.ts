export interface CloudwatchEventArchive {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_event_archive: CloudwatchEventArchiveClass;
}

export interface CloudwatchEventArchiveClass {
    /** (Required) The name of the new event archive. The archive name cannot exceed 48 characters. */
    name:             any;
    /** (Required) Event bus source ARN from where these events should be archived. */
    event_source_arn: any;
    /** (Optional) The description of the new event archive. */
    description?:     any;
    /** (Optional) Instructs the new event archive to only capture events matched by this pattern. By default, it attempts to archive every event received in the `event_source_arn`. */
    event_pattern?:   any;
    /** (Optional) The maximum number of days to retain events in the new event archive. By default, it archives indefinitely. */
    retention_days?:  any;
}