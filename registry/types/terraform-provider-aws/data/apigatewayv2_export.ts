export interface Apigatewayv2Export {
    data: Datum[];
}

export interface Datum {
    apigatewayv2_export: Apigatewayv2ExportClass;
}

export interface Apigatewayv2ExportClass {
    /** (Required) API identifier. */
    api_id:              any;
    /** (Required) Version of the API specification to use. `OAS30`, for OpenAPI 3.0, is the only supported value. */
    specification:       any;
    /** (Required) Output type of the exported definition file. Valid values are `JSON` and `YAML`. */
    output_type:         any;
    /** (Optional) Version of the API Gateway export algorithm. API Gateway uses the latest version by default. Currently, the only supported version is `1.0`. */
    export_version?:     any;
    /** (Optional) Whether to include API Gateway extensions in the exported API definition. API Gateway extensions are included by default. */
    include_extensions?: any;
    /** (Optional) Name of the API stage to export. If you don't specify this property, a representation of the latest API configuration is exported. */
    stage_name?:         any;
}