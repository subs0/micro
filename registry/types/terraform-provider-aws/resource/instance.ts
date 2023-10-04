export interface Instance {
    resource: Resource[];
}

export interface Resource {
    instance: { [key: any]: string };
}