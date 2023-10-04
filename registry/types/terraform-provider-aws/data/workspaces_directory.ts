export interface WorkspacesDirectory {
    data: Datum[];
}

export interface Datum {
    workspaces_directory: WorkspacesDirectoryClass;
}

export interface WorkspacesDirectoryClass {
    /** (Required) Directory identifier for registration in WorkSpaces service. */
    directory_id: any;
}