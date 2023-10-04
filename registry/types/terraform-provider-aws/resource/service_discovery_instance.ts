export interface ServiceDiscoveryInstance {
    resource: Resource[];
}

export interface Resource {
    service_discovery_instance: ServiceDiscoveryInstanceClass;
}

export interface ServiceDiscoveryInstanceClass {
    /** (Required, ForceNew) The ID of the service instance. */
    instance_id?: any;
    /** (Required, ForceNew) The ID of the service that you want to use to create the instance. */
    service_id?:  any;
    /** (Required) A map contains the attributes of the instance. Check the [doc](https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html#API_RegisterInstance_RequestSyntax) for the supported attributes and syntax. */
    attributes:   any;
}