export interface APIGatewayAPIKey {
    data: Datum[];
}

export interface Datum {
    api_gateway_api_key: APIGatewayAPIKeyClass;
}

export interface APIGatewayAPIKeyClass {
    /** (Required) ID of the API Key to look up. */
    id: any;
}