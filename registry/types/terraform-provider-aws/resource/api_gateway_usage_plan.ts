export interface APIGatewayUsagePlan {
    resource: Resource[];
}

export interface Resource {
    api_gateway_usage_plan: APIGatewayUsagePlanClass;
}

export interface APIGatewayUsagePlanClass {
    /** (Required) Name of the usage plan. */
    name:               any;
    /** (Optional) Description of a usage plan. */
    description?:       any;
    /** (Optional) Associated [API stages](#api-stages-arguments) of the usage plan. */
    api_stages?:        any;
    /** (Optional) The [quota settings](#quota-settings-arguments) of the usage plan. */
    quota_settings?:    any;
    /** (Optional) The [throttling limits](#throttling-settings-arguments) of the usage plan. */
    throttle_settings?: any;
    /** (Optional) AWS Marketplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace. */
    product_code?:      any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
    /** (Optional) The [throttling limits](#throttle) of the usage plan. */
    throttle?:          any;
}