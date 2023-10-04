export interface Route53Zone {
    data: Datum[];
}

export interface Datum {
    route53_zone: Route53ZoneClass;
}

export interface Route53ZoneClass {
    /** (Optional) Hosted Zone id of the desired Hosted Zone. */
    zone_id?:      any;
    /** (Optional) Hosted Zone name of the desired Hosted Zone. */
    name?:         any;
    /** (Optional) Used with `name` field to get a private Hosted Zone. */
    private_zone?: any;
    /** (Optional) Used with `name` field to get a private Hosted Zone associated with the vpc_id (in this case, private_zone is not mandatory). */
    vpc_id?:       any;
    /** (Optional) Used with `name` field. A map of tags, each pair of which must exactly match a pair on the desired Hosted Zone. */
    tags?:         any;
}