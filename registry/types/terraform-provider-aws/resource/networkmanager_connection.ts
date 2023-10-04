export interface NetworkmanagerConnection {
    resource: Resource[];
}

export interface Resource {
    networkmanager_connection: NetworkmanagerConnectionClass;
}

export interface NetworkmanagerConnectionClass {
    /** (Required) The ID of the second device in the connection. */
    connected_device_id: any;
    /** (Optional) The ID of the link for the second device. */
    connected_link_id?:  any;
    /** (Optional) A description of the connection. */
    description?:        any;
    /** (Required) The ID of the first device in the connection. */
    device_id:           any;
    /** (Required) The ID of the global network. */
    global_network_id:   any;
    /** (Optional) The ID of the link for the first device. */
    link_id?:            any;
    /** (Optional) Key-value tags for the connection. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
}