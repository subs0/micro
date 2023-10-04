export interface Apigatewayv2Model {
    resource: Resource[];
}

export interface Resource {
    apigatewayv2_model: Apigatewayv2ModelClass;
}

export interface Apigatewayv2ModelClass {
    /** (Required) API identifier. */
    api_id:       any;
    /** (Required)  The content-type for the model, for example, `application/json`. Must be between 1 and 256 characters in length. */
    content_type: any;
    /** (Required) Name of the model. Must be alphanumeric. Must be between 1 and 128 characters in length. */
    name:         any;
    /** (Required) Schema for the model. This should be a [JSON schema draft 4](https://tools.ietf.org/html/draft-zyp-json-schema-04) model. Must be less than or equal to 32768 characters in length. */
    schema:       any;
    /** (Optional) Description of the model. Must be between 1 and 128 characters in length. */
    description?: any;
}