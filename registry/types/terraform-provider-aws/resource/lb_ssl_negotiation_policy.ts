export interface LBSSLNegotiationPolicy {
    resource: Resource[];
}

export interface Resource {
    lb_ssl_negotiation_policy: LBSSLNegotiationPolicyClass;
}

export interface LBSSLNegotiationPolicyClass {
    /** (Required) The name of the SSL negotiation policy. */
    name:          any;
    /** (Required) The load balancer to which the policy */
    load_balancer: any;
    /** (Required) The load balancer port to which the policy */
    lb_port:       any;
    /** (Optional) An SSL Negotiation policy attribute. Each has two properties: */
    attribute?:    any;
    /** The value of the attribute */
    value?:        any;
    /** (Optional) Map of arbitrary keys and values that, when changed, will trigger a redeployment. To force a redeployment without changing these keys/values, use the [`terraform taint` command](https://www.terraform.io/docs/commands/taint.html). */
    triggers?:     any;
}