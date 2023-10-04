export interface GrafanaWorkspace {
    data: Datum[];
}

export interface Datum {
    grafana_workspace: GrafanaWorkspaceClass;
}

export interface GrafanaWorkspaceClass {
    /** (Required) Grafana workspace ID. */
    workspace_id: any;
}