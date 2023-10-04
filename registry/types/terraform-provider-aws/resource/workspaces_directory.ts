export interface WorkspacesDirectory {
    resource: Resource[];
}

export interface Resource {
    workspaces_directory: WorkspacesDirectoryClass;
}

export interface WorkspacesDirectoryClass {
    /** (Required) The directory identifier for registration in WorkSpaces service. */
    directory_id:  any;
    /** (Optional) The identifiers of the subnets where the directory resides. */
    subnet_ids?:   any;
    /** The identifiers of the IP access control groups associated with the directory. */
    ip_group_ids?: any;
}