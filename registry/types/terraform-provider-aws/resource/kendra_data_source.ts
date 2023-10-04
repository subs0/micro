export interface KendraDataSource {
    resource: Resource[];
}

export interface Resource {
    kendra_data_source: { [key: any]: string };
}