export interface LBHostedZoneID {
    data: Datum[];
}

export interface Datum {
    lb_hosted_zone_id: LBHostedZoneIDClass;
}

export interface LBHostedZoneIDClass {
    /** (Optional) Name of the region whose AWS ELB HostedZoneId is desired. */
    region?:             any;
    /** (Optional) Type of load balancer to create. Possible values are `application` or `network`. The default value is `application`. */
    load_balancer_type?: any;
}