export interface AthenaDataCatalog {
    resource: Resource[];
}

export interface Resource {
    athena_data_catalog: AthenaDataCatalogClass;
}

export interface AthenaDataCatalogClass {
    "This resource supports the following arguments:"?: any;
}