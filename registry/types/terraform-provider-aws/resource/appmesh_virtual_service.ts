export interface AppmeshVirtualService {
    resource: Resource[];
}

export interface Resource {
    appmesh_virtual_service: AppmeshVirtualServiceClass;
}

export interface AppmeshVirtualServiceClass {
    /** (Required) Name to use for the virtual service. Must be between 1 and 255 characters in length. */
    name:                any;
    /** (Required) Name of the service mesh in which to create the virtual service. Must be between 1 and 255 characters in length. */
    mesh_name:           any;
    /** (Optional) AWS account ID of the service mesh's owner. Defaults to the account ID the [AWS provider][1] is currently connected to. */
    mesh_owner?:         any;
    /** (Required) Virtual service specification to apply. */
    spec:                any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
    /** (Optional) Virtual node associated with a virtual service. */
    virtual_node?:       any;
    /** (Optional) Virtual router associated with a virtual service. */
    virtual_router?:     any;
    /** (Required) Name of the virtual node that is acting as a service provider. Must be between 1 and 255 characters in length. */
    virtual_node_name:   any;
    /** (Required) Name of the virtual router that is acting as a service provider. Must be between 1 and 255 characters in length. */
    virtual_router_name: any;
}