export interface ElbHostedZoneID {
    data: Datum[];
}

export interface Datum {
    elb_hosted_zone_id: ElbHostedZoneIDClass;
}

export interface ElbHostedZoneIDClass {
    /** (Optional) Name of the region whose AWS ELB HostedZoneId is desired. */
    region?: any;
}