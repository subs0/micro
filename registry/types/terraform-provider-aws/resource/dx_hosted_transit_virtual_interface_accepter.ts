export interface DxHostedTransitVirtualInterfaceAccepter {
    resource: Resource[];
}

export interface Resource {
    dx_hosted_transit_virtual_interface_accepter: DxHostedTransitVirtualInterfaceAccepterClass;
}

export interface DxHostedTransitVirtualInterfaceAccepterClass {
    /** (Required) The ID of the [Direct Connect gateway](dx_gateway.html) to which to connect the virtual interface. */
    dx_gateway_id:        any;
    /** (Required) The ID of the Direct Connect virtual interface to accept. */
    virtual_interface_id: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
}