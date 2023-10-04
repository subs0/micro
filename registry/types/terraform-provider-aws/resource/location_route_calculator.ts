export interface LocationRouteCalculator {
    resource: Resource[];
}

export interface Resource {
    location_route_calculator: LocationRouteCalculatorClass;
}

export interface LocationRouteCalculatorClass {
    /** (Required) The name of the route calculator resource. */
    calculator_name: any;
    /** (Required) Specifies the data provider of traffic and road network data. */
    data_source:     any;
    /** (Optional) The optional description for the route calculator resource. */
    description?:    any;
    /** (Optional) Key-value tags for the route calculator. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
}