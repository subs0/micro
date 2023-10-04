export interface Route53TrafficPolicyDocument {
    data: Datum[];
}

export interface Datum {
    route53_traffic_policy_document: Route53TrafficPolicyDocumentClass;
}

export interface Route53TrafficPolicyDocumentClass {
    /** (Required) ID of a rule you want to assign. */
    id:                      any;
    /** (Optional) Type of the rule. */
    type?:                   any;
    /** (Optional) Region code for the AWS Region that you created the resource in. */
    region?:                 any;
    /** (Optional) Value of the `type`. */
    value?:                  any;
    /** (Optional) Configuration block for the settings for the rule or endpoint that you want to route traffic to whenever the corresponding resources are available. Only valid for `failover` type. See below */
    primary?:                any;
    /** (Optional) Configuration block for the rule or endpoint that you want to route traffic to whenever the primary resources are not available. Only valid for `failover` type. See below */
    secondary?:              any;
    /** (Optional) Configuration block for when you add a geolocation rule, you configure your traffic policy to route your traffic based on the geographic location of your users.  Only valid for `geo` type. See below */
    location?:               any;
    /** (Optional) Configuration block for when you add a geoproximity rule, you configure Amazon Route 53 to route traffic to your resources based on the geographic location of your resources. Only valid for `geoproximity` type. See below */
    geo_proximity_location?: any;
    /** (Optional) Configuration block for when you add a latency rule, you configure your traffic policy to route your traffic based on the latency (the time delay) between your users and the AWS regions where you've created AWS resources such as ELB load balancers and Amazon S3 buckets. Only valid for `latency` type. See below */
    regions?:                any;
    /** (Optional) Configuration block for when you add a multivalue answer rule, you configure your traffic policy to route traffic approximately randomly to your healthy resources.  Only valid for `multivalue` type. See below */
    items?:                  any;
    /** (Optional) References to an endpoint. */
    endpoint_reference?:     any;
    /** (Optional) Indicates whether you want Amazon Route 53 to evaluate the health of the endpoint and route traffic only to healthy endpoints. */
    evaluate_target_health?: any;
    /** (Optional) If you want to associate a health check with the endpoint or rule. */
    health_check?:           any;
    /** (Optional) References to a rule. */
    rule_reference?:         any;
    /** (Optional) Value of a continent. */
    continent?:              any;
    /** (Optional) Value of a country. */
    country?:                any;
    /** (Optional) Indicates whether this set of values represents the default location. */
    is_default?:             any;
    /** (Optional) Value of a subdivision. */
    subdivision?:            any;
    /** (Optional) Specify a value for `bias` if you want to route more traffic to an endpoint from nearby endpoints (positive values) or route less traffic to an endpoint (negative values). */
    bias?:                   any;
    /** (Optional) Represents the location south (negative) or north (positive) of the equator. Valid values are -90 degrees to 90 degrees. */
    latitude?:               any;
    /** (Optional) Represents the location west (negative) or east (positive) of the prime meridian. Valid values are -180 degrees to 180 degrees. */
    longitude?:              any;
}