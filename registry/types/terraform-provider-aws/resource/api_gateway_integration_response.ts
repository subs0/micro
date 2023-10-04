export interface APIGatewayIntegrationResponse {
    resource: Resource[];
}

export interface Resource {
    api_gateway_integration_response: APIGatewayIntegrationResponseClass;
}

export interface APIGatewayIntegrationResponseClass {
    /** (Required) HTTP method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`, `ANY`). */
    http_method:          any;
    /** (Required) API resource ID. */
    resource_id:          any;
    /** (Required) ID of the associated REST API. */
    rest_api_id:          any;
    /** (Required) HTTP status code. */
    status_code:          any;
    /** (Optional) How to handle request payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT`. If this property is not defined, the response payload will be passed through from the integration response to the method response without modification. */
    content_handling?:    any;
    /** (Optional) Map of response parameters that can be read from the backend response. For example: `response_parameters = { "method.response.header.X-Some-Header" = "integration.response.header.X-Some-Other-Header" }`. */
    response_parameters?: any;
    /** (Optional) Map of templates used to transform the integration response body. */
    response_templates?:  any;
    /** (Optional) Regular expression pattern used to choose an integration response based on the response from the backend. Omit configuring this to make the integration the default one. If the backend is an `AWS` Lambda function, the AWS Lambda function error header is matched. For all other `HTTP` and `AWS` backends, the HTTP status code is matched. */
    selection_pattern?:   any;
}