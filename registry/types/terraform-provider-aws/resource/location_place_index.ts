export interface LocationPlaceIndex {
    resource: Resource[];
}

export interface Resource {
    location_place_index: LocationPlaceIndexClass;
}

export interface LocationPlaceIndexClass {
    /** (Required) Specifies the geospatial data provider for the new place index. */
    data_source:                any;
    /** (Required) The name of the place index resource. */
    index_name:                 any;
    data_source_configuration?: DataSourceConfiguration;
    /** (Optional) The optional description for the place index resource. */
    description?:               any;
    /** (Optional) Key-value tags for the place index. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
}

export interface DataSourceConfiguration {
    /** (Optional) Specifies how the results of an operation will be stored by the caller. Valid values: `SingleUse`, `Storage`. Default: `SingleUse`. */
    intended_use: any;
}