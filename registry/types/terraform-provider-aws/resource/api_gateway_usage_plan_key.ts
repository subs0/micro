export interface APIGatewayUsagePlanKey {
    resource: Resource[];
}

export interface Resource {
    api_gateway_usage_plan_key: APIGatewayUsagePlanKeyClass;
}

export interface APIGatewayUsagePlanKeyClass {
    /** (Required) Identifier of the API key resource. */
    key_id:        any;
    /** (Required) Type of the API key resource. Currently, the valid key type is API_KEY. */
    key_type:      any;
    /** (Required) Id of the usage plan resource representing to associate the key to. */
    usage_plan_id: any;
}