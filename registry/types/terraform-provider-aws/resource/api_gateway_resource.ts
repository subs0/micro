export interface APIGatewayResource {
    resource: Resource[];
}

export interface Resource {
    api_gateway_resource: APIGatewayResourceClass;
}

export interface APIGatewayResourceClass {
    /** (Required) ID of the associated REST API */
    rest_api_id: any;
    /** (Required) ID of the parent API resource */
    parent_id:   any;
    /** (Required) Last path segment of this API resource. */
    path_part:   any;
}