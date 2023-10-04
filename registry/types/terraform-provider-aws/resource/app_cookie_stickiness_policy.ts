export interface AppCookieStickinessPolicy {
    resource: Resource[];
}

export interface Resource {
    app_cookie_stickiness_policy: AppCookieStickinessPolicyClass;
}

export interface AppCookieStickinessPolicyClass {
    /** (Required) Name of the stickiness policy. */
    name:          any;
    /** (Required) Name of load balancer to which the policy */
    load_balancer: any;
    /** (Required) Load balancer port to which the policy */
    lb_port:       any;
    /** (Required) Application cookie whose lifetime the ELB's cookie should follow. */
    cookie_name:   any;
}