export interface QuicksightFolder {
    resource: Resource[];
}

export interface Resource {
    quicksight_folder: QuicksightFolderClass;
}

export interface QuicksightFolderClass {
    /** (Required, Forces new resource) Identifier for the folder. */
    folder_id?:         any;
    /** (Required) Display name for the folder. */
    name:               any;
    /** (Optional, Forces new resource) AWS account ID. */
    aws_account_id?:    any;
    /** (Optional) The type of folder. By default, it is `SHARED`. Valid values are: `SHARED`. */
    folder_type?:       any;
    /** (Optional) The Amazon Resource Name (ARN) for the parent folder. If not set, creates a root-level folder. */
    parent_folder_arn?: any;
    permissions?:       Permissions;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
}

export interface Permissions {
    /** (Required) List of IAM actions to grant or revoke permissions on. */
    actions:   any;
    /** (Required) ARN of the principal. See the [ResourcePermission documentation](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ResourcePermission.html) for the applicable ARN values. */
    principal: any;
}