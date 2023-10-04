export interface WorkspacesWorkspace {
    data: Datum[];
}

export interface Datum {
    workspaces_workspace: WorkspacesWorkspaceClass;
}

export interface WorkspacesWorkspaceClass {
    /** (Optional) ID of the bundle for the WorkSpace. */
    bundle_id?:                      any;
    /** (Optional) ID of the directory for the WorkSpace. You have to specify `user_name` along with `directory_id`. You cannot combine this parameter with `workspace_id`. */
    directory_id?:                   any;
    /** (Optional) Indicates whether the data stored on the root volume is encrypted. */
    root_volume_encryption_enabled?: any;
    /** (Optional) Tags for the WorkSpace. */
    tags?:                           any;
    /** (Optional) ID of the WorkSpace. You cannot combine this parameter with `directory_id`. */
    workspace_id?:                   any;
}