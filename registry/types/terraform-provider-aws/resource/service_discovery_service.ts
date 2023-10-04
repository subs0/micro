export interface ServiceDiscoveryService {
    resource: Resource[];
}

export interface Resource {
    service_discovery_service: ServiceDiscoveryServiceClass;
}

export interface ServiceDiscoveryServiceClass {
    /** (Required, ForceNew) The name of the service. */
    name?:                       any;
    /** (Optional) The description of the service. */
    description?:                any;
    dns_config?:                 DNSConfig;
    health_check_config?:        HealthCheckConfig;
    /** (Optional, Default:false ) A boolean that indicates all instances should be deleted from the service so that the service can be destroyed without error. These instances are not recoverable. */
    force_destroy?:              any;
    health_check_custom_config?: HealthCheckCustomConfig;
    /** (Optional) A map of tags to assign to the service. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                       any;
}

export interface DNSConfig {
    /** (Required, ForceNew) The ID of the namespace to use for DNS configuration. */
    namespace_id:   any;
    /** (Required) An array that contains one DnsRecord object for each resource record set. */
    dns_records:    any;
    /** (Optional) The routing policy that you want to apply to all records that Route 53 creates when you register an instance and specify the service. Valid Values: MULTIVALUE, WEIGHTED */
    routing_policy: any;
    /** (Required) The amount of time, in seconds, that you want DNS resolvers to cache the settings for this resource record set. */
    ttl:            any;
    /** (Optional, ForceNew) The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy. Valid Values: HTTP, HTTPS, TCP */
    type:           any;
}

export interface HealthCheckConfig {
    /** (Optional, ForceNew) The number of 30-second intervals that you want service discovery to wait before it changes the health status of a service instance.  Maximum value of 10. */
    failure_threshold: any;
    /** (Optional) The path that you want Route 53 to request when performing health checks. Route 53 automatically adds the DNS name for the service. If you don't specify a value, the default value is /. */
    resource_path:     any;
    /** (Optional, ForceNew) The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy. Valid Values: HTTP, HTTPS, TCP */
    type:              any;
}

export interface HealthCheckCustomConfig {
    /** (Optional, ForceNew) The number of 30-second intervals that you want service discovery to wait before it changes the health status of a service instance.  Maximum value of 10. */
    failure_threshold: any;
}