export interface APIGatewayAuthorizer {
    data: Datum[];
}

export interface Datum {
    api_gateway_authorizer: APIGatewayAuthorizerClass;
}

export interface APIGatewayAuthorizerClass {
    /** (Required) Authorizer identifier. */
    authorizer_id: any;
    /** (Required) ID of the associated REST API. */
    rest_api_id:   any;
}