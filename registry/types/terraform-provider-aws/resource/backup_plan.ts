export interface BackupPlan {
    resource: Resource[];
}

export interface Resource {
    backup_plan: BackupPlanClass;
}

export interface BackupPlanClass {
    /** (Required) The display name of a backup plan. */
    name:                      any;
    /** (Required) A rule object that specifies a scheduled task that is used to back up a selection of resources. */
    rule:                      any;
    /** (Optional) An object that specifies backup options for each resource type. */
    advanced_backup_setting?:  any;
    /** (Optional) Metadata that you can assign to help organize the plans you create. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
    /** (Required) An display name for a backup rule. */
    rule_name:                 any;
    /** (Required) The name of a logical container where backups are stored. */
    target_vault_name:         any;
    /** (Optional) A CRON expression specifying when AWS Backup initiates a backup job. */
    schedule?:                 any;
    /** (Optional) Enable continuous backups for supported resources. */
    enable_continuous_backup?: any;
    /** (Optional) The amount of time in minutes before beginning a backup. */
    start_window?:             any;
    /** (Optional) The amount of time in minutes AWS Backup attempts a backup before canceling the job and returning an error. */
    completion_window?:        any;
    /** (Optional) The lifecycle defines when a protected resource is copied over to a backup vault and when it expires.  Fields documented above. */
    lifecycle?:                any;
    /** (Optional) Metadata that you can assign to help organize the resources that you create. */
    recovery_point_tags?:      any;
    /** (Optional) Configuration block(s) with copy operation settings. Detailed below. */
    copy_action?:              any;
    /** (Optional) Specifies the number of days after creation that a recovery point is moved to cold storage. */
    cold_storage_after?:       any;
    /** (Optional) Specifies the number of days after creation that a recovery point is deleted. Must be 90 days greater than `cold_storage_after`. */
    delete_after?:             any;
    /** (Required) An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for the copied backup. */
    destination_vault_arn:     any;
    /** (Required) Specifies the backup option for a selected resource. This option is only available for Windows VSS backup jobs. Set to `{ WindowsVSS = "enabled" }` to enable Windows VSS backup option and create a VSS Windows backup. */
    backup_options:            any;
    /** (Required) The type of AWS resource to be backed up. For VSS Windows backups, the only supported resource type is Amazon EC2. Valid values: `EC2`. */
    resource_type:             any;
}