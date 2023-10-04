export interface LightsailLBHTTPSRedirectionPolicy {
    resource: Resource[];
}

export interface Resource {
    lightsail_lb_https_redirection_policy: LightsailLBHTTPSRedirectionPolicyClass;
}

export interface LightsailLBHTTPSRedirectionPolicyClass {
    /** (Required) The name of the load balancer to which you want to enable http to https redirection. */
    lb_name: any;
    /** (Required) - The Https Redirection state of the load balancer. `true` to activate http to https redirection or `false` to deactivate http to https redirection. */
    enabled: any;
}