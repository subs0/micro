export interface LBTargetGroup {
    data: Datum[];
}

export interface Datum {
    lb_target_group: LBTargetGroupClass;
}

export interface LBTargetGroupClass {
    /** (Optional) Full ARN of the target group. */
    arn?:  any;
    /** (Optional) Unique name of the target group. */
    name?: any;
    /** (Optional) Mapping of tags, each pair of which must exactly match a pair on the desired target group. */
    tags?: any;
}