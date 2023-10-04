export interface DmsReplicationTask {
    resource: Resource[];
}

export interface Resource {
    dms_replication_task: DmsReplicationTaskClass;
}

export interface DmsReplicationTaskClass {
    /** (Optional, Conflicts with `cdc_start_time`) Indicates when you want a change data capture (CDC) operation to start. The value can be in date, checkpoint, or LSN/SCN format depending on the source engine. For more information, see [Determining a CDC native start point](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native). */
    cdc_start_position?:        any;
    /** (Optional, Conflicts with `cdc_start_position`) The Unix timestamp integer for the start of the Change Data Capture (CDC) operation. */
    cdc_start_time?:            any;
    /** (Required) The migration type. Can be one of `full-load | cdc | full-load-and-cdc`. */
    migration_type:             any;
    /** (Required) The Amazon Resource Name (ARN) of the replication instance. */
    replication_instance_arn:   any;
    /** (Required) The replication task identifier. */
    replication_task_id:        any;
    /** (Optional) An escaped JSON string that contains the task settings. For a complete list of task settings, see [Task Settings for AWS Database Migration Service Tasks](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html). */
    replication_task_settings?: any;
    /** (Required) The Amazon Resource Name (ARN) string that uniquely identifies the source endpoint. */
    source_endpoint_arn:        any;
    /** (Optional) Whether to run or stop the replication task. */
    start_replication_task?:    any;
    /** (Required) An escaped JSON string that contains the table mappings. For information on table mapping see [Using Table Mapping with an AWS Database Migration Service Task to Select and Filter Data](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html) */
    table_mappings:             any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
    /** (Required) The Amazon Resource Name (ARN) string that uniquely identifies the target endpoint. */
    target_endpoint_arn:        any;
}