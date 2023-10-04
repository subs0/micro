export interface BackupSelection {
    resource: Resource[];
}

export interface Resource {
    backup_selection: BackupSelectionClass;
}

export interface BackupSelectionClass {
    /** (Required) The display name of a resource selection document. */
    name:           any;
    /** (Required) The backup plan ID to be associated with the selection of resources. */
    plan_id:        any;
    /** (Required) The ARN of the IAM role that AWS Backup uses to authenticate when restoring and backing up the target resource. See the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#managed-policies) for additional information about using AWS managed policies or creating custom policies attached to the IAM role. */
    iam_role_arn:   any;
    /** (Optional) Tag-based conditions used to specify a set of resources to assign to a backup plan. */
    selection_tag?: any;
    /** (Optional) A list of conditions that you define to assign resources to your backup plans using tags. */
    condition?:     any;
    /** (Optional) An array of strings that either contain Amazon Resource Names (ARNs) or match patterns of resources to assign to a backup plan. */
    resources?:     any;
    /** (Optional) An array of strings that either contain Amazon Resource Names (ARNs) or match patterns of resources to exclude from a backup plan. */
    not_resources?: any;
    /** (Required) An operation, such as `StringEquals`, that is applied to a key-value pair used to filter resources in a selection. */
    type:           any;
    /** (Required) The key in a key-value pair. */
    key:            any;
    /** (Required) The value in a key-value pair. */
    value:          any;
}