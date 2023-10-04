export interface PrometheusWorkspaces {
    data: Datum[];
}

export interface Datum {
    prometheus_workspaces: PrometheusWorkspacesClass;
}

export interface PrometheusWorkspacesClass {
    /** (Optional) Limits results to workspaces with aliases that begin with this value. */
    alias_prefix?: any;
}