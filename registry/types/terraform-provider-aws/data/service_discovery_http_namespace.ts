export interface ServiceDiscoveryHTTPNamespace {
    data: Datum[];
}

export interface Datum {
    service_discovery_http_namespace: ServiceDiscoveryHTTPNamespaceClass;
}

export interface ServiceDiscoveryHTTPNamespaceClass {
    /** (Required) Name of the http namespace. */
    name: any;
}