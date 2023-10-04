export interface Apigatewayv2API {
    data: Datum[];
}

export interface Datum {
    apigatewayv2_api: Apigatewayv2APIClass;
}

export interface Apigatewayv2APIClass {
    /** (Required) API identifier. */
    api_id: any;
}