export interface WorkspacesWorkspace {
    resource: Resource[];
}

export interface Resource {
    workspaces_workspace: WorkspacesWorkspaceClass;
}

export interface WorkspacesWorkspaceClass {
    /** (Required) The ID of the directory for the WorkSpace. */
    directory_id:                    any;
    /** (Required) The ID of the bundle for the WorkSpace. */
    bundle_id:                       any;
    /** (Optional) Indicates whether the data stored on the root volume is encrypted. */
    root_volume_encryption_enabled?: any;
    /** (Optional) The tags for the WorkSpace. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
}