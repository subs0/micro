export interface PrometheusWorkspace {
    data: Datum[];
}

export interface Datum {
    prometheus_workspace: PrometheusWorkspaceClass;
}

export interface PrometheusWorkspaceClass {
    /** (Required) Prometheus workspace ID. */
    workspace_id: any;
}