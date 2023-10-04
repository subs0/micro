export interface LBListener {
    data: Datum[];
}

export interface Datum {
    lb_listener: LBListenerClass;
}

export interface LBListenerClass {
    /** (Optional) ARN of the listener. Required if `load_balancer_arn` and `port` is not set. */
    arn?:               any;
    /** (Optional) ARN of the load balancer. Required if `arn` is not set. */
    load_balancer_arn?: any;
    /** (Optional) Port of the listener. Required if `arn` is not set. */
    port?:              any;
}