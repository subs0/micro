export interface AppflowFlow {
    resource: Resource[];
}

export interface Resource {
    appflow_flow: { [key: any]: string };
}