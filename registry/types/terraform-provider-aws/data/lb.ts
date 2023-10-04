export interface LB {
    data: Datum[];
}

export interface Datum {
    lb: LBClass;
}

export interface LBClass {
    /** (Optional) Full ARN of the load balancer. */
    arn?:  any;
    /** (Optional) Unique name of the load balancer. */
    name?: any;
    /** (Optional) Mapping of tags, each pair of which must exactly match a pair on the desired load balancer. */
    tags?: any;
}