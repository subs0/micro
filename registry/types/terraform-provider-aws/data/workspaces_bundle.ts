export interface WorkspacesBundle {
    data: Datum[];
}

export interface Datum {
    workspaces_bundle: WorkspacesBundleClass;
}

export interface WorkspacesBundleClass {
    "This data source supports the following arguments:"?: any;
}