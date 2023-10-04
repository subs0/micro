export interface AppmeshRoute {
    resource: Resource[];
}

export interface Resource {
    appmesh_route: AppmeshRouteClass;
}

export interface AppmeshRouteClass {
    /** (Required) Name for the HTTP header in the client request that will be matched on. */
    name:                any;
    /** (Required) Name of the service mesh in which to create the route. Must be between 1 and 255 characters in length. */
    mesh_name:           any;
    /** (Optional) AWS account ID of the service mesh's owner. Defaults to the account ID the [AWS provider][1] is currently connected to. */
    mesh_owner?:         any;
    /** (Required) Name of the virtual router in which to create the route. Must be between 1 and 255 characters in length. */
    virtual_router_name: any;
    /** (Required) Route specification to apply. */
    spec:                any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
    /** (Optional) GRPC routing information for the route. */
    grpc_route?:         any;
    /** (Optional) HTTP/2 routing information for the route. */
    http2_route?:        any;
    /** (Optional) HTTP routing information for the route. */
    http_route?:         any;
    /** (Optional) Priority for the route, between `0` and `1000`. */
    priority?:           any;
    /** (Optional) TCP routing information for the route. */
    tcp_route?:          any;
    /** (Required) Action to take if a match is determined. */
    action:              any;
    /** (Required) Criteria for determining an HTTP request match. */
    match:               any;
    /** (Optional) Retry policy. */
    retry_policy?:       any;
    /** (Optional) Types of timeouts. */
    timeout?:            any;
    /** (Required) Targets that traffic is routed to when a request matches the route. */
    weighted_target:     any;
    /** (Optional) Idle timeout. An idle timeout bounds the amount of time that a connection may be idle. */
    idle?:               any;
    /** (Required) Retry unit. Valid values: `ms`, `s`. */
    unit:                any;
    /** (Required) Retry value. */
    value:               any;
    /** (Optional) Data to match from the gRPC request. */
    metadata?:           any;
    /** (Optional) Method name to match from the request. If you specify a name, you must also specify a `service_name`. */
    method_name?:        any;
    /** (Optional) Fully qualified domain name for the service to match from the request. */
    service_name?:       any;
    /** (Optional) If `true`, the match is on the opposite of the `match` method and value. Default is `false`. */
    invert?:             any;
    /** (Optional) Header value sent by the client must match the specified value exactly. */
    exact?:              any;
    /** (Optional) Header value sent by the client must begin with the specified characters. */
    prefix?:             any;
    /** (Optional) Header value sent by the client must include the specified characters. */
    regex?:              any;
    /** (Optional) Header value sent by the client must end with the specified characters. */
    suffix?:             any;
    /** (Optional) List of gRPC retry events. */
    grpc_retry_events?:  any;
    /** (Optional) List of HTTP retry events. */
    http_retry_events?:  any;
    /** (Required) Maximum number of retries. */
    max_retries:         any;
    /** (Required) Per-retry timeout. */
    per_retry_timeout:   any;
    /** (Optional) List of TCP retry events. The only valid value is `connection-error`. */
    tcp_retry_events?:   any;
    /** (Optional) Per request timeout. */
    per_request?:        any;
    /** (Optional) Client request headers to match on. */
    header?:             any;
    /** (Optional) Client request header method to match on. Valid values: `GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`, `PATCH`. */
    method?:             any;
    /** (Optional) Client request path to match on. */
    path?:               any;
    /** (Optional) Client request query parameters to match on. */
    query_parameter?:    any;
    /** (Optional) Client request header scheme to match on. Valid values: `http`, `https`. */
    scheme?:             any;
    /** (Required) Virtual node to associate with the weighted target. Must be between 1 and 255 characters in length. */
    virtual_node:        any;
    /** (Required) Relative weight of the weighted target. An integer between 0 and 100. */
    weight:              any;
    /** (Optional) The targeted port of the weighted object. */
    port?:               any;
    /** (Required) End of the range. */
    end:                 any;
    /** (Requited) Start of the range. */
    start?:              any;
}