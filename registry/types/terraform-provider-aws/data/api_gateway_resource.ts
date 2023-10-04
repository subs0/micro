export interface APIGatewayResource {
    data: Datum[];
}

export interface Datum {
    api_gateway_resource: APIGatewayResourceClass;
}

export interface APIGatewayResourceClass {
    /** (Required) REST API id that owns the resource. If no REST API is found, an error will be returned. */
    rest_api_id: any;
    /** (Required) Full path of the resource.  If no path is found, an error will be returned. */
    path:        any;
}