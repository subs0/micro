export interface APIGatewayRequestValidator {
    resource: Resource[];
}

export interface Resource {
    api_gateway_request_validator: APIGatewayRequestValidatorClass;
}

export interface APIGatewayRequestValidatorClass {
    /** (Required) Name of the request validator */
    name:                         any;
    /** (Required) ID of the associated Rest API */
    rest_api_id:                  any;
    /** (Optional) Boolean whether to validate request body. Defaults to `false`. */
    validate_request_body?:       any;
    /** (Optional) Boolean whether to validate request parameters. Defaults to `false`. */
    validate_request_parameters?: any;
}