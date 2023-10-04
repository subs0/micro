export interface APIGatewayMethodResponse {
    resource: Resource[];
}

export interface Resource {
    api_gateway_method_response: APIGatewayMethodResponseClass;
}

export interface APIGatewayMethodResponseClass {
    /** (Required) ID of the associated REST API */
    rest_api_id:          any;
    /** (Required) API resource ID */
    resource_id:          any;
    /** (Required) HTTP Method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`, `ANY`) */
    http_method:          any;
    /** (Required) HTTP status code */
    status_code:          any;
    /** (Optional) Map of the API models used for the response's content type */
    response_models?:     any;
    /** (Optional) Map of response parameters that can be sent to the caller. */
    response_parameters?: any;
}