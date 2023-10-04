export interface AppmeshVirtualRouter {
    resource: Resource[];
}

export interface Resource {
    appmesh_virtual_router: AppmeshVirtualRouterClass;
}

export interface AppmeshVirtualRouterClass {
    /** (Required) Name to use for the virtual router. Must be between 1 and 255 characters in length. */
    name:         any;
    /** (Required) Name of the service mesh in which to create the virtual router. Must be between 1 and 255 characters in length. */
    mesh_name:    any;
    /** (Optional) AWS account ID of the service mesh's owner. Defaults to the account ID the [AWS provider][1] is currently connected to. */
    mesh_owner?:  any;
    /** (Required) Virtual router specification to apply. */
    spec:         any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
    /** (Optional) Listeners that the virtual router is expected to receive inbound traffic from. */
    listener?:    any;
    /** (Required) Port mapping information for the listener. */
    port_mapping: any;
    /** (Required) Port used for the port mapping. */
    port:         any;
    /** (Required) Protocol used for the port mapping. Valid values are `http`,`http2`, `tcp` and `grpc`. */
    protocol:     any;
}