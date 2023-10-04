export interface ConnectRoutingProfile {
    resource: Resource[];
}

export interface Resource {
    connect_routing_profile: ConnectRoutingProfileClass;
}

export interface ConnectRoutingProfileClass {
    /** (Required) Specifies the default outbound queue for the Routing Profile. */
    default_outbound_queue_id: any;
    /** (Required) Specifies the description of the Routing Profile. */
    description:               any;
    /** (Required) Specifies the identifier of the hosting Amazon Connect Instance. */
    instance_id:               any;
    /** (Required) One or more `media_concurrencies` blocks that specify the channels that agents can handle in the Contact Control Panel (CCP) for this Routing Profile. The `media_concurrencies` block is documented below. */
    media_concurrencies:       any;
    /** (Required) Specifies the name of the Routing Profile. */
    name:                      any;
    /** (Optional) One or more `queue_configs` blocks that specify the inbound queues associated with the routing profile. If no queue is added, the agent only can make outbound calls. The `queue_configs` block is documented below. */
    queue_configs?:            any;
    /** (Optional) Tags to apply to the Routing Profile. If configured with a provider */
    tags?:                     any;
    /** (Required) Specifies the channels agents can handle in the Contact Control Panel (CCP) for this routing profile. Valid values are `VOICE`, `CHAT`, `TASK`. */
    channel:                   any;
    /** (Required) Specifies the number of contacts an agent can have on a channel simultaneously. Valid Range for `VOICE`: Minimum value of 1. Maximum value of 1. Valid Range for `CHAT`: Minimum value of 1. Maximum value of 10. Valid Range for `TASK`: Minimum value of 1. Maximum value of 10. */
    concurrency:               any;
    /** (Required) Specifies the delay, in seconds, that a contact should be in the queue before they are routed to an available agent */
    delay:                     any;
    /** (Required) Specifies the order in which contacts are to be handled for the queue. */
    priority:                  any;
    /** (Required) Specifies the identifier for the queue. */
    queue_id:                  any;
}