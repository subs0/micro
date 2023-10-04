export interface DatasyncTask {
    resource: Resource[];
}

export interface Resource {
    datasync_task: DatasyncTaskClass;
}

export interface DatasyncTaskClass {
    /** (Required) Amazon Resource Name (ARN) of destination DataSync Location. */
    destination_location_arn:        any;
    /** (Required) Amazon Resource Name (ARN) of source DataSync Location. */
    source_location_arn:             any;
    /** (Optional) Amazon Resource Name (ARN) of the CloudWatch Log Group that is used to monitor and log events in the sync task. */
    cloudwatch_log_group_arn?:       any;
    /** (Optional) Filter rules that determines which files to exclude from a task. */
    excludes?:                       any;
    /** (Optional) Filter rules that determines which files to include in a task. */
    includes?:                       any;
    /** (Optional) Name of the DataSync Task. */
    name?:                           any;
    /** (Optional) Configuration block containing option that controls the default behavior when you start an execution of this DataSync Task. For each individual task execution, you can override these options by specifying an overriding configuration in those executions. */
    options?:                        any;
    /** (Optional) Specifies a schedule used to periodically transfer files from a source to a destination location. */
    schedule?:                       any;
    /** (Optional) Key-value pairs of resource tags to assign to the DataSync Task. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
    /** (Optional) A file metadata that shows the last time a file was accessed (that is when the file was read or written to). If set to `BEST_EFFORT`, the DataSync Task attempts to preserve the original (that is, the version before sync `PREPARING` phase) `atime` attribute on all source files. Valid values: `BEST_EFFORT`, `NONE`. Default: `BEST_EFFORT`. */
    atime?:                          any;
    /** (Optional) Limits the bandwidth utilized. For example, to set a maximum of 1 MB, set this value to `1048576`. Value values: `-1` or greater. Default: `-1` (unlimited). */
    bytes_per_second?:               any;
    /** (Optional) Group identifier of the file's owners. Valid values: `BOTH`, `INT_VALUE`, `NAME`, `NONE`. Default: `INT_VALUE` (preserve integer value of the ID). */
    gid?:                            any;
    /** (Optional) Determines the type of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide. Valid values: `OFF`, `BASIC`, `TRANSFER`. Default: `OFF`. */
    log_level?:                      any;
    /** (Optional) A file metadata that indicates the last time a file was modified (written to) before the sync `PREPARING` phase. Value values: `NONE`, `PRESERVE`. Default: `PRESERVE`. */
    mtime?:                          any;
    /** (Optional) Specifies whether object tags are maintained when transferring between object storage systems. If you want your DataSync task to ignore object tags, specify the NONE value. Valid values: `PRESERVE`, `NONE`. Default value: `PRESERVE`. */
    object_tags?:                    any;
    /** (Optional) Determines whether files at the destination should be overwritten or preserved when copying files. Valid values: `ALWAYS`, `NEVER`. Default: `ALWAYS`. */
    overwrite_mode?:                 any;
    /** (Optional) Determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file. Valid values: `NONE`, `PRESERVE`. Default: `PRESERVE`. */
    posix_permissions?:              any;
    /** (Optional) Whether files deleted in the source should be removed or preserved in the destination file system. Valid values: `PRESERVE`, `REMOVE`. Default: `PRESERVE`. */
    preserve_deleted_files?:         any;
    /** (Optional) Whether the DataSync Task should preserve the metadata of block and character devices in the source files system, and recreate the files with that device name and metadata on the destination. The DataSync Task can’t sync the actual contents of such devices, because many of the devices are non-terminal and don’t return an end of file (EOF) marker. Valid values: `NONE`, `PRESERVE`. Default: `NONE` (ignore special devices). */
    preserve_devices?:               any;
    /** (Optional) Determines which components of the SMB security descriptor are copied from source to destination objects. This value is only used for transfers between SMB and Amazon FSx for Windows File Server locations, or between two Amazon FSx for Windows File Server locations. Valid values: `NONE`, `OWNER_DACL`, `OWNER_DACL_SACL`. Default: `OWNER_DACL`. */
    security_descriptor_copy_flags?: any;
    /** (Optional) Determines whether tasks should be queued before executing the tasks. Valid values: `ENABLED`, `DISABLED`. Default `ENABLED`. */
    task_queueing?:                  any;
    /** (Optional) Determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location. Valid values: `CHANGED`, `ALL`. Default: `CHANGED` */
    transfer_mode?:                  any;
    /** (Optional) User identifier of the file's owners. Valid values: `BOTH`, `INT_VALUE`, `NAME`, `NONE`. Default: `INT_VALUE` (preserve integer value of the ID). */
    uid?:                            any;
    /** (Optional) Whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred. Valid values: `NONE`, `POINT_IN_TIME_CONSISTENT`, `ONLY_FILES_TRANSFERRED`. Default: `POINT_IN_TIME_CONSISTENT`. */
    verify_mode?:                    any;
    /** (Required) Specifies the schedule you want your task to use for repeated executions. For more information, see [Schedule Expressions for Rules](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html). */
    schedule_expression:             any;
    /** (Optional) The type of filter rule to apply. Valid values: `SIMPLE_PATTERN`. */
    filter_type?:                    any;
    /** (Optional) A single filter string that consists of the patterns to include. The patterns are delimited by "|" (that is, a pipe), for example: `/folder1|/folder2` */
    value?:                          any;
}