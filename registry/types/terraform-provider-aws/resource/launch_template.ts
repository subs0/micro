export interface LaunchTemplate {
    resource: Resource[];
}

export interface Resource {
    launch_template: { [key: any]: string };
}