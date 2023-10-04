export interface Apigatewayv2Apis {
    data: Datum[];
}

export interface Datum {
    apigatewayv2_apis: Apigatewayv2ApisClass;
}

export interface Apigatewayv2ApisClass {
    /** (Optional) API name. */
    name?:          any;
    /** (Optional) API protocol. */
    protocol_type?: any;
    /** (Optional) Map of tags, each pair of which must exactly match */
    tags?:          any;
}