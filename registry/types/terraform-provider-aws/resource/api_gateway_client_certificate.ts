export interface APIGatewayClientCertificate {
    resource: Resource[];
}

export interface Resource {
    api_gateway_client_certificate: APIGatewayClientCertificateClass;
}

export interface APIGatewayClientCertificateClass {
    /** (Optional) Description of the client certificate. */
    description?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}