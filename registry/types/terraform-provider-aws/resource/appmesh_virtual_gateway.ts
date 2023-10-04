export interface AppmeshVirtualGateway {
    resource: Resource[];
}

export interface Resource {
    appmesh_virtual_gateway: AppmeshVirtualGatewayClass;
}

export interface AppmeshVirtualGatewayClass {
    /** (Required) Name to use for the virtual gateway. Must be between 1 and 255 characters in length. */
    name:                       any;
    /** (Required) Name of the service mesh in which to create the virtual gateway. Must be between 1 and 255 characters in length. */
    mesh_name:                  any;
    /** (Optional) AWS account ID of the service mesh's owner. Defaults to the account ID the [AWS provider][1] is currently connected to. */
    mesh_owner?:                any;
    /** (Required) Virtual gateway specification to apply. */
    spec:                       any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
    /** (Required) Listeners that the mesh endpoint is expected to receive inbound traffic from. You can specify one listener. */
    listener:                   any;
    /** (Optional) Defaults for backends. */
    backend_defaults?:          any;
    /** (Optional) Inbound and outbound access logging information for the virtual gateway. */
    logging?:                   any;
    /** (Optional) Default client policy for virtual gateway backends. */
    client_policy?:             any;
    /** (Optional) Transport Layer Security (TLS) properties for the listener */
    tls?:                       any;
    /** (Optional) Whether the policy is enforced. Default is `true`. */
    enforce?:                   any;
    /** (Optional) One or more ports that the policy is enforced for. */
    ports?:                     any;
    /** (Required) TLS validation context. */
    validation:                 any;
    /** (Optional) TLS validation context trust for a local file certificate. */
    file?:                      any;
    /** (Optional) TLS validation context trust for a [Secret Discovery Service](https://www.envoyproxy.io/docs/envoy/latest/configuration/security/secret#secret-discovery-service-sds) certificate. */
    sds?:                       any;
    /** (Required) Certificate trust chain for a certificate stored on the file system of the mesh endpoint that the proxy is running on. Must be between 1 and 255 characters in length. */
    certificate_chain:          any;
    /** (Required) Private key for a certificate stored on the file system of the mesh endpoint that the proxy is running on. Must be between 1 and 255 characters in length. */
    private_key:                any;
    /** (Required) Name of the secret for a virtual gateway's Transport Layer Security (TLS) Secret Discovery Service validation context trust. */
    secret_name:                any;
    /** (Optional) SANs for a virtual gateway's listener's Transport Layer Security (TLS) validation context. */
    subject_alternative_names?: any;
    /** (Required) TLS validation context trust. */
    trust:                      any;
    /** (Required) Criteria for determining a SAN's match. */
    match:                      any;
    /** (Required) Values sent must match the specified values exactly. */
    exact:                      any;
    /** (Optional) An AWS Certificate Manager (ACM) certificate. */
    acm?:                       any;
    /** (Required) One or more ACM ARNs. */
    certificate_authority_arns: any;
    /** (Required) Port mapping information for the listener. */
    port_mapping:               any;
    /** (Optional) Connection pool information for the listener. */
    connection_pool?:           any;
    /** (Optional) Health check information for the listener. */
    health_check?:              any;
    /** (Optional) Access log configuration for a virtual gateway. */
    access_log?:                any;
    /** (Optional) The specified format for the logs. */
    format?:                    any;
    /** (Required) File path to write access logs to. You can use `/dev/stdout` to send access logs to standard out. Must be between 1 and 255 characters in length. */
    path:                       any;
    /** (Optional) The logging format for JSON. */
    json?:                      any;
    /** (Optional) The logging format for text. Must be between 1 and 1000 characters in length. */
    text?:                      any;
    /** (Required) The specified key for the JSON. Must be between 1 and 100 characters in length. */
    key:                        any;
    /** (Required) The specified value for the JSON. Must be between 1 and 100 characters in length. */
    value:                      any;
    /** (Required) Port used for the port mapping. */
    port:                       any;
    /** (Required) Protocol for the health check request. Valid values are `http`, `http2`, and `grpc`. */
    protocol:                   any;
    /** (Optional) Connection pool information for gRPC listeners. */
    grpc?:                      any;
    /** (Optional) Connection pool information for HTTP listeners. */
    http?:                      any;
    /** (Optional) Connection pool information for HTTP2 listeners. */
    http2?:                     any;
    /** (Required) Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster. Minimum value of `1`. */
    max_requests:               any;
    /** (Required) Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster. Minimum value of `1`. */
    max_connections:            any;
    /** (Optional) Number of overflowing requests after `max_connections` Envoy will queue to upstream cluster. Minimum value of `1`. */
    max_pending_requests?:      any;
    /** (Required) Number of consecutive successful health checks that must occur before declaring listener healthy. */
    healthy_threshold:          any;
    /** (Required) Amount of time to wait when receiving a response from the health check, in milliseconds. */
    timeout_millis:             any;
    /** (Required) Number of consecutive failed health checks that must occur before declaring a virtual gateway unhealthy. */
    unhealthy_threshold:        any;
    /** (Required) Listener's TLS certificate. */
    certificate:                any;
    /** (Required) ARN for the certificate. */
    certificate_arn:            any;
}