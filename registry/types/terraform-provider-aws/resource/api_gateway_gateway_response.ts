export interface APIGatewayGatewayResponse {
    resource: Resource[];
}

export interface Resource {
    api_gateway_gateway_response: APIGatewayGatewayResponseClass;
}

export interface APIGatewayGatewayResponseClass {
    /** (Required) String identifier of the associated REST API. */
    rest_api_id:          any;
    /** (Required) Response type of the associated GatewayResponse. */
    response_type:        any;
    /** (Optional) HTTP status code of the Gateway Response. */
    status_code?:         any;
    /** (Optional) Map of templates used to transform the response body. */
    response_templates?:  any;
    /** (Optional) Map of parameters (paths, query strings and headers) of the Gateway Response. */
    response_parameters?: any;
}