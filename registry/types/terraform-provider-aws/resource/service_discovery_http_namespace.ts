export interface ServiceDiscoveryHTTPNamespace {
    resource: Resource[];
}

export interface Resource {
    service_discovery_http_namespace: ServiceDiscoveryHTTPNamespaceClass;
}

export interface ServiceDiscoveryHTTPNamespaceClass {
    /** (Required) The name of the http namespace. */
    name:         any;
    /** (Optional) The description that you specify for the namespace when you create it. */
    description?: any;
    /** (Optional) A map of tags to assign to the namespace. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}