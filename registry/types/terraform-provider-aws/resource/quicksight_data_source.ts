export interface QuicksightDataSource {
    resource: Resource[];
}

export interface Resource {
    quicksight_data_source: { [key: any]: string };
}