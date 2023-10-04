export interface LoadBalancerPolicy {
    resource: Resource[];
}

export interface Resource {
    load_balancer_policy: LoadBalancerPolicyClass;
}

export interface LoadBalancerPolicyClass {
    /** (Required) The load balancer on which the policy is defined. */
    load_balancer_name: any;
    /** (Required) The name of the load balancer policy. */
    policy_name:        any;
    /** (Required) The policy type. */
    policy_type_name:   any;
    /** (Optional) Policy attribute to apply to the policy. */
    policy_attribute?:  any;
}