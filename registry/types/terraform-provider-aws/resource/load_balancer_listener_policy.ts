export interface LoadBalancerListenerPolicy {
    resource: Resource[];
}

export interface Resource {
    load_balancer_listener_policy: LoadBalancerListenerPolicyClass;
}

export interface LoadBalancerListenerPolicyClass {
    /** (Required) The load balancer to attach the policy to. */
    load_balancer_name: any;
    /** (Required) The load balancer listener port to apply the policy to. */
    load_balancer_port: any;
    /** (Required) List of Policy Names to apply to the backend server. */
    policy_names:       any;
    /** (Optional) Map of arbitrary keys and values that, when changed, will trigger an update. To force an update without changing these keys/values, use the [`terraform taint` command](https://www.terraform.io/docs/commands/taint.html). */
    triggers?:          any;
}