export interface ConnectQueue {
    resource: Resource[];
}

export interface Resource {
    connect_queue: ConnectQueueClass;
}

export interface ConnectQueueClass {
    /** (Optional) Specifies the description of the Queue. */
    description?:                  any;
    /** (Required) Specifies the identifier of the Hours of Operation. */
    hours_of_operation_id:         any;
    /** (Required) Specifies the identifier of the hosting Amazon Connect Instance. */
    instance_id:                   any;
    /** (Optional) Specifies the maximum number of contacts that can be in the queue before it is considered full. Minimum value of 0. */
    max_contacts?:                 any;
    /** (Required) Specifies the name of the Queue. */
    name:                          any;
    /** (Required) A block that defines the outbound caller ID name, number, and outbound whisper flow. The Outbound Caller Config block is documented below. */
    outbound_caller_config:        any;
    /** (Optional) Specifies a list of quick connects ids that determine the quick connects available to agents who are working the queue. */
    quick_connect_ids?:            any;
    /** (Optional) Specifies the description of the Queue. Valid values are `ENABLED`, `DISABLED`. */
    status?:                       any;
    /** (Optional) Tags to apply to the Queue. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                         any;
    /** (Optional) Specifies the caller ID name. */
    outbound_caller_id_name?:      any;
    /** (Optional) Specifies the caller ID number. */
    outbound_caller_id_number_id?: any;
    /** (Optional) Specifies outbound whisper flow to be used during an outbound call. */
    outbound_flow_id?:             any;
}