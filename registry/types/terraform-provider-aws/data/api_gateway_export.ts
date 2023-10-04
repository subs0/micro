export interface APIGatewayExport {
    data: Datum[];
}

export interface Datum {
    api_gateway_export: APIGatewayExportClass;
}

export interface APIGatewayExportClass {
    /** (Required) Type of export. Acceptable values are `oas30` for OpenAPI 3.0.x and `swagger` for Swagger/OpenAPI 2.0. */
    export_type: any;
    /** (Required) Identifier of the associated REST API. */
    rest_api_id: any;
    /** (Required) Name of the Stage that will be exported. */
    stage_name:  any;
    /** (Optional) Content-type of the export. Valid values are `application/json` and `application/yaml` are supported for `export_type` `ofoas30` and `swagger`. */
    accepts?:    any;
    /** (Optional) Key-value map of query string parameters that specify properties of the export. the following parameters are supported: `extensions='integrations'` or `extensions='apigateway'` will export the API with x-amazon-apigateway-integration extensions. `extensions='authorizers'` will export the API with x-amazon-apigateway-authorizer extensions. */
    parameters?: any;
}