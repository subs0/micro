export interface Route53HostedZoneDnssec {
    resource: Resource[];
}

export interface Resource {
    route53_hosted_zone_dnssec: Route53HostedZoneDnssecClass;
}

export interface Route53HostedZoneDnssecClass {
    /** (Required) Identifier of the Route 53 Hosted Zone. */
    hosted_zone_id:  any;
    /** (Optional) Hosted Zone signing status. Valid values: `SIGNING`, `NOT_SIGNING`. Defaults to `SIGNING`. */
    signing_status?: any;
}