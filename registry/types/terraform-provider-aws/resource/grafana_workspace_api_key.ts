export interface GrafanaWorkspaceAPIKey {
    resource: Resource[];
}

export interface Resource {
    grafana_workspace_api_key: GrafanaWorkspaceAPIKeyClass;
}

export interface GrafanaWorkspaceAPIKeyClass {
    "The following arguments are required:"?: any;
}