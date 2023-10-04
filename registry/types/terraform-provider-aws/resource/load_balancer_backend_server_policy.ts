export interface LoadBalancerBackendServerPolicy {
    resource: Resource[];
}

export interface Resource {
    load_balancer_backend_server_policy: LoadBalancerBackendServerPolicyClass;
}

export interface LoadBalancerBackendServerPolicyClass {
    /** (Required) The load balancer to attach the policy to. */
    load_balancer_name: any;
    /** (Required) List of Policy Names to apply to the backend server. */
    policy_names:       any;
    /** (Required) The instance port to apply the policy to. */
    instance_port:      any;
}