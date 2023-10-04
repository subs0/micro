export interface Route53TrafficPolicy {
    resource: Resource[];
}

export interface Resource {
    route53_traffic_policy: Route53TrafficPolicyClass;
}

export interface Route53TrafficPolicyClass {
    /** (Required) Name of the traffic policy. */
    name:     any;
    /** (Required) Policy document. This is a JSON formatted string. For more information about building Route53 traffic policy documents, see the [AWS Route53 Traffic Policy document format](https://docs.aws.amazon.com/Route53/latest/APIReference/api-policies-traffic-policy-document-format.html) */
    document: any;
    /** (Optional) Comment for the traffic policy. */
    comment?: any;
}