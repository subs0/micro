export interface APIGatewayAuthorizers {
    data: Datum[];
}

export interface Datum {
    api_gateway_authorizers: APIGatewayAuthorizersClass;
}

export interface APIGatewayAuthorizersClass {
    /** (Required) ID of the associated REST API. */
    rest_api_id: any;
}