export interface Route53TrafficPolicyInstance {
    resource: Resource[];
}

export interface Resource {
    route53_traffic_policy_instance: Route53TrafficPolicyInstanceClass;
}

export interface Route53TrafficPolicyInstanceClass {
    /** (Required) Domain name for which Amazon Route 53 responds to DNS queries by using the resource record sets that Route 53 creates for this traffic policy instance. */
    name:                   any;
    /** (Required) ID of the traffic policy that you want to use to create resource record sets in the specified hosted zone. */
    traffic_policy_id:      any;
    /** (Required) Version of the traffic policy */
    traffic_policy_version: any;
    /** (Required) ID of the hosted zone that you want Amazon Route 53 to create resource record sets in by using the configuration in a traffic policy. */
    hosted_zone_id:         any;
    /** (Required) TTL that you want Amazon Route 53 to assign to all the resource record sets that it creates in the specified hosted zone. */
    ttl:                    any;
}