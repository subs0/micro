export interface NetworkmanagerGlobalNetwork {
    resource: Resource[];
}

export interface Resource {
    networkmanager_global_network: NetworkmanagerGlobalNetworkClass;
}

export interface NetworkmanagerGlobalNetworkClass {
    /** (Optional) Description of the Global Network. */
    description?: any;
    /** (Optional) Key-value tags for the Global Network. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}