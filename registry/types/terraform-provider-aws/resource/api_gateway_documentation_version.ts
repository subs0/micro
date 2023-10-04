export interface APIGatewayDocumentationVersion {
    resource: Resource[];
}

export interface Resource {
    api_gateway_documentation_version: APIGatewayDocumentationVersionClass;
}

export interface APIGatewayDocumentationVersionClass {
    /** (Required) Version identifier of the API documentation snapshot. */
    version:      any;
    /** (Required) ID of the associated Rest API */
    rest_api_id:  any;
    /** (Optional) Description of the API documentation version. */
    description?: any;
}