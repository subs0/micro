export interface WorkspacesImage {
    data: Datum[];
}

export interface Datum {
    workspaces_image: WorkspacesImageClass;
}

export interface WorkspacesImageClass {
    "This data source supports the following arguments:"?: any;
}