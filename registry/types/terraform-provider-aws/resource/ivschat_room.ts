export interface IvschatRoom {
    resource: Resource[];
}

export interface Resource {
    ivschat_room: IvschatRoomClass;
}

export interface IvschatRoomClass {
    /** (Optional) List of Logging Configuration */
    logging_configuration_identifiers?: any;
    /** (Optional) Maximum number of characters in a single */
    maximum_message_length?:            any;
    /** (Optional) Maximum number of messages per */
    maximum_message_rate_per_second?:   any;
    /** (Optional) Configuration information for optional */
    message_review_handler?:            any;
    /** (Optional) The fallback behavior (whether the message */
    fallback_result?:                   any;
    /** (Optional) ARN of the lambda message review handler function. */
    uri?:                               any;
    /** (Optional) Room name. */
    name?:                              any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                              any;
}