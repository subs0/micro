export interface LightsailLBStickinessPolicy {
    resource: Resource[];
}

export interface Resource {
    lightsail_lb_stickiness_policy: LightsailLBStickinessPolicyClass;
}

export interface LightsailLBStickinessPolicyClass {
    /** (Required) The name of the load balancer to which you want to enable session stickiness. */
    lb_name:         any;
    /** (Required) The cookie duration in seconds. This determines the length of the session stickiness. */
    cookie_duration: any;
    /** (Required) - The Session Stickiness state of the load balancer. `true` to activate session stickiness or `false` to deactivate session stickiness. */
    enabled:         any;
}