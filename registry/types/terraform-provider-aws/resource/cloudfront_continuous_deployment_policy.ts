export interface CloudfrontContinuousDeploymentPolicy {
    resource: Resource[];
}

export interface Resource {
    cloudfront_continuous_deployment_policy: CloudfrontContinuousDeploymentPolicyClass;
}

export interface CloudfrontContinuousDeploymentPolicyClass {
    /** (Required) Whether this continuous deployment policy is enabled. */
    enabled:                        any;
    /** (Required) CloudFront domain name of the staging distribution. See [`staging_distribution_dns_names`](#staging_distribution_dns_names). */
    staging_distribution_dns_names: any;
    /** (Required) Parameters for routing production traffic from primary to staging distributions. See [`traffic_config`](#traffic_config). */
    traffic_config:                 any;
    /** (Required) A list of CloudFront domain names for the staging distribution. */
    items:                          any;
    /** (Required) Number of CloudFront domain names in the staging distribution. */
    quantity:                       any;
    /** (Required) Type of traffic configuration. Valid values are `SingleWeight` and `SingleHeader`. */
    type:                           any;
    /** (Optional) Determines which HTTP requests are sent to the staging distribution. See [`single_header_config`](#single_header_config). */
    single_header_config?:          any;
    /** (Optional) Contains the percentage of traffic to send to the staging distribution. See [`single_weight_config`](#single_weight_config). */
    single_weight_config?:          any;
    /** (Required) Request header name to send to the staging distribution. The header must contain the prefix `aws-cf-cd-`. */
    header:                         any;
    /** (Required) Request header value. */
    value:                          any;
    /** (Required) The percentage of traffic to send to a staging distribution, expressed as a decimal number between `0` and `.15`. */
    weight:                         any;
    /** (Optional) Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to the staging distribution, while others are sent to the primary distribution. Define the session duration using TTL values. See [`session_stickiness_config`](#session_stickiness_config). */
    session_stickiness_config?:     any;
    /** (Required) The amount of time in seconds after which sessions will cease if no requests are received. Valid values are `300` – `3600` (5–60 minutes). The value must be less than or equal to `maximum_ttl`. */
    idle_ttl:                       any;
    /** (Required) The maximum amount of time in seconds to consider requests from the viewer as being part of the same session. Valid values are `300` – `3600` (5–60 minutes). The value must be greater than or equal to `idle_ttl`. */
    maximum_ttl:                    any;
}