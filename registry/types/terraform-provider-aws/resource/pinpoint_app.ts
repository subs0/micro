export interface PinpointApp {
    resource: Resource[];
}

export interface Resource {
    pinpoint_app: PinpointAppClass;
}

export interface PinpointAppClass {
    /** (Optional) The application name. By default generated by Terraform */
    name?:                 any;
    /** (Optional) The name of the Pinpoint application. Conflicts with `name` */
    name_prefix?:          any;
    /** (Optional) Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign */
    campaign_hook?:        any;
    /** (Optional) The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own */
    limits?:               any;
    /** (Optional) The default quiet time for the app. Each campaign for this app sends no messages during this time unless the campaign overrides the default with a quiet time of its own */
    quiet_time?:           any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                 any;
    /** (Optional) Lambda function name or ARN to be called for delivery. Conflicts with `web_url` */
    lambda_function_name?: any;
    /** (Required if `lambda_function_name` or `web_url` are provided) What mode Lambda should be invoked in. Valid values for this parameter are `DELIVERY`, `FILTER`.   */
    mode?:                 any;
    /** (Optional) Web URL to call for hook. If the URL has authentication specified it will be added as authentication to the request. Conflicts with `lambda_function_name` */
    web_url?:              any;
    /** (Optional) The maximum number of messages that the campaign can send daily. */
    daily?:                any;
    /** (Optional) The length of time (in seconds) that the campaign can run before it ends and message deliveries stop. This duration begins at the scheduled start time for the campaign. The minimum value is 60. */
    maximum_duration?:     any;
    /** (Optional) The number of messages that the campaign can send per second. The minimum value is 50, and the maximum is 20000. */
    messages_per_second?:  any;
    /** (Optional) The maximum total number of messages that the campaign can send. */
    total?:                any;
    /** (Optional) The default end time for quiet time in ISO 8601 format. Required if `start` is set */
    end?:                  any;
    /** (Optional) The default start time for quiet time in ISO 8601 format. Required if `end` is set */
    start?:                any;
}