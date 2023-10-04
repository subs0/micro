export interface APIGatewayBasePathMapping {
    resource: Resource[];
}

export interface Resource {
    api_gateway_base_path_mapping: APIGatewayBasePathMappingClass;
}

export interface APIGatewayBasePathMappingClass {
    /** (Required) Already-registered domain name to connect the API to. */
    domain_name: any;
    /** (Required) ID of the API to connect. */
    api_id:      any;
    /** (Optional) Name of a specific deployment stage to expose at the given path. If omitted, callers may select any stage by including its name as a path element after the base path. */
    stage_name?: any;
    /** (Optional) Path segment that must be prepended to the path when accessing the API via this mapping. If omitted, the API is exposed at the root of the given domain. */
    base_path?:  any;
}