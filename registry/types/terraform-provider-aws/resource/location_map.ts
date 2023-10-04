export interface LocationMap {
    resource: Resource[];
}

export interface Resource {
    location_map: LocationMapClass;
}

export interface LocationMapClass {
    configuration: Configuration;
    /** (Required) The name for the map resource. */
    map_name:      any;
    /** (Optional) An optional description for the map resource. */
    description?:  any;
    /** (Optional) Key-value tags for the map. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
}

export interface Configuration {
    /** (Required) Specifies the map style selected from an available data provider. Valid values can be found in the [Location Service CreateMap API Reference](https://docs.aws.amazon.com/location/latest/APIReference/API_CreateMap.html). */
    style: any;
}