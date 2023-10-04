export interface LightsailLB {
    resource: Resource[];
}

export interface Resource {
    lightsail_lb: LightsailLBClass;
}

export interface LightsailLBClass {
    /** (Required) The name of the Lightsail load balancer. */
    name:               any;
    /** (Required) The instance port the load balancer will connect. */
    instance_port:      any;
    /** (Optional) The health check path of the load balancer. Default value "/". */
    health_check_path?: any;
    /** (Optional) A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
}