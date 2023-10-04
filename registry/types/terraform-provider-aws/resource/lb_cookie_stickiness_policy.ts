export interface LBCookieStickinessPolicy {
    resource: Resource[];
}

export interface Resource {
    lb_cookie_stickiness_policy: LBCookieStickinessPolicyClass;
}

export interface LBCookieStickinessPolicyClass {
    /** (Required) The name of the stickiness policy. */
    name:                      any;
    /** (Required) The load balancer to which the policy */
    load_balancer:             any;
    /** (Required) The load balancer port to which the policy */
    lb_port:                   any;
    /** (Optional) The time period after which */
    cookie_expiration_period?: any;
}