export interface CloudwatchEventEndpoint {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_event_endpoint: CloudwatchEventEndpointClass;
}

export interface CloudwatchEventEndpointClass {
    /** (Optional) A description of the global endpoint. */
    description?:        any;
    /** (Required) The event buses to use. The names of the event buses must be identical in each Region. Exactly two event buses are required. Documented below. */
    event_bus:           any;
    /** (Required) The name of the global endpoint. */
    name:                any;
    /** (Optional) Parameters used for replication. Documented below. */
    replication_config?: any;
    /** (Optional) The ARN of the IAM role used for replication between event buses. */
    role_arn?:           any;
    /** (Required) Parameters used for routing, including the health check and secondary Region. Documented below. */
    routing_config:      any;
    /** (Required) The ARN of the event bus the endpoint is associated with. */
    event_bus_arn:       any;
    /** (Optional) The state of event replication. Valid values: `ENABLED`, `DISABLED`. The default state is `ENABLED`, which means you must supply a `role_arn`. If you don't have a `role_arn` or you don't want event replication enabled, set `state` to `DISABLED`. */
    state?:              any;
    /** (Required) Parameters used for failover. This includes what triggers failover and what happens when it's triggered. Documented below. */
    failover_config:     any;
    /** (Required) Parameters used for the primary Region. Documented below. */
    primary:             any;
    /** (Required) Parameters used for the secondary Region, the Region that events are routed to when failover is triggered or event replication is enabled. Documented below. */
    secondary:           any;
    /** (Required) The ARN of the health check used by the endpoint to determine whether failover is triggered. */
    health_check:        any;
    /** (Required) The name of the secondary Region. */
    route:               any;
}