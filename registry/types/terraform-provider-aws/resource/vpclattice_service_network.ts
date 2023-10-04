export interface VpclatticeServiceNetwork {
    resource: Resource[];
}

export interface Resource {
    vpclattice_service_network: VpclatticeServiceNetworkClass;
}

export interface VpclatticeServiceNetworkClass {
    /** (Required) Name of the service network */
    name:       any;
    /** (Optional) Type of IAM policy. Either `NONE` or `AWS_IAM`. */
    auth_type?: any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:      any;
}