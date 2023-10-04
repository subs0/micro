export interface ServiceDiscoveryService {
    data: Datum[];
}

export interface Datum {
    service_discovery_service: ServiceDiscoveryServiceClass;
}

export interface ServiceDiscoveryServiceClass {
    /** (Required) Name of the service. */
    name:         any;
    /** (Required) ID of the namespace that the service belongs to. */
    namespace_id: any;
}