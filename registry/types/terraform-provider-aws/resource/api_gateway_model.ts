export interface APIGatewayModel {
    resource: Resource[];
}

export interface Resource {
    api_gateway_model: APIGatewayModelClass;
}

export interface APIGatewayModelClass {
    /** (Required) ID of the associated REST API */
    rest_api_id:  any;
    /** (Required) Name of the model */
    name:         any;
    /** (Optional) Description of the model */
    description?: any;
    /** (Required) Content type of the model */
    content_type: any;
    /** (Required) Schema of the model in a JSON form */
    schema:       any;
}