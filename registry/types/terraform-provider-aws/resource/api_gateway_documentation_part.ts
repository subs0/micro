export interface APIGatewayDocumentationPart {
    resource: Resource[];
}

export interface Resource {
    api_gateway_documentation_part: APIGatewayDocumentationPartClass;
}

export interface APIGatewayDocumentationPartClass {
    /** (Required) Location of the targeted API entity of the to-be-created documentation part. See below. */
    location:     any;
    /** (Required) Content map of API-specific key-value pairs describing the targeted API entity. The map must be encoded as a JSON string, e.g., "{ \"description\": \"The API does ...\" }". Only Swagger-compliant key-value pairs can be exported and, hence, published. */
    properties:   any;
    /** (Required) ID of the associated Rest API */
    rest_api_id:  any;
    /** (Optional) HTTP verb of a method. The default value is `*` for any method. */
    method?:      any;
    /** (Optional) Name of the targeted API entity. */
    name?:        any;
    /** (Optional) URL path of the target. The default value is `/` for the root resource. */
    path?:        any;
    /** (Optional) HTTP status code of a response. The default value is `*` for any status code. */
    status_code?: any;
    /** (Required) Type of API entity to which the documentation content appliesE.g., `API`, `METHOD` or `REQUEST_BODY` */
    type:         any;
}