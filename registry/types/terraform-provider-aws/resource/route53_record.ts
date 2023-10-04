export interface Route53Record {
    resource: Resource[];
}

export interface Resource {
    route53_record: Route53RecordClass;
}

export interface Route53RecordClass {
    /** (Required) Hosted zone ID for a CloudFront distribution, S3 bucket, ELB, or Route 53 hosted zone. See [`resource_elb.zone_id`](/docs/providers/aws/r/elb.html#zone_id) for example. */
    zone_id:                           any;
    /** (Required) DNS domain name for a CloudFront distribution, S3 bucket, ELB, or another resource record set in this hosted zone. */
    name:                              any;
    /** (Required) `PRIMARY` or `SECONDARY`. A `PRIMARY` record will be served if its healthcheck is passing, otherwise the `SECONDARY` will be served. See http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring-options.html#dns-failover-failover-rrsets */
    type:                              any;
    /** (Required for non-alias records) The TTL of the record. */
    ttl?:                              any;
    /** (Required for non-alias records) A string list of records. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add `\"\"` inside the Terraform configuration string (e.g., `"first255characters\"\"morecharacters"`). */
    records?:                          any;
    /** (Optional) Unique identifier to differentiate records with routing policies from one another. Required if using `cidr_routing_policy`, `failover_routing_policy`, `geolocation_routing_policy`, `latency_routing_policy`, `multivalue_answer_routing_policy`, or `weighted_routing_policy`. */
    set_identifier?:                   any;
    /** (Optional) The health check the record should be associated with. */
    health_check_id?:                  any;
    /** (Optional) An alias block. Conflicts with `ttl` & `records`. */
    alias?:                            any;
    /** (Optional) A block indicating a routing policy based on the IP network ranges of requestors. Conflicts with any other routing policy. [Documented below](#cidr-routing-policy). */
    cidr_routing_policy?:              any;
    /** (Optional) A block indicating the routing behavior when associated health check fails. Conflicts with any other routing policy. [Documented below](#failover-routing-policy). */
    failover_routing_policy?:          any;
    /** (Optional) A block indicating a routing policy based on the geolocation of the requestor. Conflicts with any other routing policy. [Documented below](#geolocation-routing-policy). */
    geolocation_routing_policy?:       any;
    /** (Optional) A block indicating a routing policy based on the latency between the requestor and an AWS region. Conflicts with any other routing policy. [Documented below](#latency-routing-policy). */
    latency_routing_policy?:           any;
    /** (Optional) Set to `true` to indicate a multivalue answer routing policy. Conflicts with any other routing policy. */
    multivalue_answer_routing_policy?: any;
    /** (Optional) A block indicating a weighted routing policy. Conflicts with any other routing policy. [Documented below](#weighted-routing-policy). */
    weighted_routing_policy?:          any;
    /** (Optional) Allow creation of this record in Terraform to overwrite an existing record, if any. This does not affect the ability to update the record in Terraform and does not prevent other resources within Terraform or manual Route 53 changes outside Terraform from overwriting this record. `false` by default. This configuration is not recommended for most environments. */
    allow_overwrite?:                  any;
    /** (Required) Set to `true` if you want Route 53 to determine whether to respond to DNS queries using this resource record set by checking the health of the resource record set. Some resources have special requirements, see [related part of documentation](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-values.html#rrsets-values-alias-evaluate-target-health). */
    evaluate_target_health:            any;
    /** (Required) The CIDR collection ID. See the [`aws_route53_cidr_collection` resource](route53_cidr_collection.html) for more details. */
    collection_id:                     any;
    /** (Required) The CIDR collection location name. See the [`aws_route53_cidr_location` resource](route53_cidr_location.html) for more details. A `location_name` with an asterisk `"*"` can be used to create a default CIDR record. `collection_id` is still required for default record. */
    location_name:                     any;
    /** A two-letter continent code. See http://docs.aws.amazon.com/Route53/latest/APIReference/API_GetGeoLocation.html for code details. Either `continent` or `country` must be specified. */
    continent?:                        any;
    /** A two-character country code or `*` to indicate a default resource record set. */
    country?:                          any;
    /** (Optional) A subdivision code for a country. */
    subdivision?:                      any;
    /** (Required) An AWS region from which to measure latency. See http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-latency */
    region:                            any;
    /** (Required) A numeric value indicating the relative weight of the record. See http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-weighted. */
    weight:                            any;
}