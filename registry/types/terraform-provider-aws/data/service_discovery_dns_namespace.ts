export interface ServiceDiscoveryDNSNamespace {
    data: Datum[];
}

export interface Datum {
    service_discovery_dns_namespace: ServiceDiscoveryDNSNamespaceClass;
}

export interface ServiceDiscoveryDNSNamespaceClass {
    /** (Required) Name of the namespace. */
    name: any;
    /** (Required) Type of the namespace. Allowed values are `DNS_PUBLIC` or `DNS_PRIVATE`. */
    type: any;
}