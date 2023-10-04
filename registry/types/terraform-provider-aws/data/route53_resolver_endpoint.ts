export interface Route53ResolverEndpoint {
    data: Datum[];
}

export interface Datum {
    route53_resolver_endpoint: Route53ResolverEndpointClass;
}

export interface Route53ResolverEndpointClass {
    /** (Optional) ID of the Route53 Resolver Endpoint. */
    resolver_endpoint_id?: any;
    /** (Optional) One or more name/value pairs to use as filters. There are */
    filter?:               any;
    /** Computed ARN of the Route53 Resolver Endpoint. */
    arn?:                  any;
    /** Direction of the queries to or from the Resolver Endpoint . */
    direction?:            any;
    /** List of IPaddresses that have been associated with the Resolver Endpoint. */
    ip_addresses?:         any;
    /** Current status of the Resolver Endpoint. */
    status?:               any;
    /** ID of the Host VPC that the Resolver Endpoint resides in. */
    vpc_id?:               any;
}