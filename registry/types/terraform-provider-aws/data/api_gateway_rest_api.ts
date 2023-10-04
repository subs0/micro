export interface APIGatewayRESTAPI {
    data: Datum[];
}

export interface Datum {
    api_gateway_rest_api: APIGatewayRESTAPIClass;
}

export interface APIGatewayRESTAPIClass {
    /** (Required) Name of the REST API to look up. If no REST API is found with this name, an error will be returned. If multiple REST APIs are found with this name, an error will be returned. */
    name: any;
}