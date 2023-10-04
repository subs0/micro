export interface AppmeshGatewayRoute {
    resource: Resource[];
}

export interface Resource {
    appmesh_gateway_route: AppmeshGatewayRouteClass;
}

export interface AppmeshGatewayRouteClass {
    /** (Required) Name for the query parameter that will be matched on. */
    name:                    any;
    /** (Required) Name of the service mesh in which to create the gateway route. Must be between 1 and 255 characters in length. */
    mesh_name:               any;
    /** (Required) Name of the [virtual gateway](/docs/providers/aws/r/appmesh_virtual_gateway.html) to associate the gateway route with. Must be between 1 and 255 characters in length. */
    virtual_gateway_name:    any;
    /** (Optional) AWS account ID of the service mesh's owner. Defaults to the account ID the [AWS provider][1] is currently connected to. */
    mesh_owner?:             any;
    /** (Required) Gateway route specification to apply. */
    spec:                    any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
    /** (Optional) Specification of a gRPC gateway route. */
    grpc_route?:             any;
    /** (Optional) Specification of an HTTP gateway route. */
    http_route?:             any;
    /** (Optional) Specification of an HTTP/2 gateway route. */
    http2_route?:            any;
    /** (Optional) Priority for the gateway route, between `0` and `1000`. */
    priority?:               any;
    /** (Required) Action to take if a match is determined. */
    action:                  any;
    /** (Required) Criteria for determining a request match. */
    match:                   any;
    /** (Required) Target that traffic is routed to when a request matches the gateway route. */
    target:                  any;
    /** (Optional) The port number to match from the request. */
    port?:                   any;
    /** (Required) Virtual service gateway route target. */
    virtual_service:         any;
    /** (Required) Name of the virtual service that traffic is routed to. Must be between 1 and 255 characters in length. */
    virtual_service_name:    any;
    /** (Optional) Gateway route action to rewrite. */
    rewrite?:                any;
    /** (Optional) Host name to match on. */
    hostname?:               any;
    /** (Optional) Client request path to match on. */
    path?:                   any;
    /** (Optional) Header value sent by the client must begin with the specified characters. */
    prefix?:                 any;
    /** (Required) Default target host name to write to. Valid values: `ENABLED`, `DISABLED`. */
    default_target_hostname: any;
    /** (Required) Value used to replace matched path. */
    exact:                   any;
    /** (Optional) Default prefix used to replace the incoming route prefix when rewritten. Valid values: `ENABLED`, `DISABLED`. */
    default_prefix?:         any;
    /** (Optional) Value used to replace the incoming route prefix when rewritten. */
    value?:                  any;
    /** (Required) Fully qualified domain name for the service to match from the request. */
    service_name:            any;
    /** (Optional) Client request headers to match on. */
    header?:                 any;
    /** (Optional) Client request query parameters to match on. */
    query_parameter?:        any;
    /** (Optional) If `true`, the match is on the opposite of the `match` method and value. Default is `false`. */
    invert?:                 any;
    /** (Optional) The regex used to match the path. */
    regex?:                  any;
    /** (Optional) Specified ending characters of the host name to match on. */
    suffix?:                 any;
    /** (Required) End of the range. */
    end:                     any;
    /** (Requited) Start of the range. */
    start?:                  any;
}