export interface DxHostedPrivateVirtualInterfaceAccepter {
    resource: Resource[];
}

export interface Resource {
    dx_hosted_private_virtual_interface_accepter: DxHostedPrivateVirtualInterfaceAccepterClass;
}

export interface DxHostedPrivateVirtualInterfaceAccepterClass {
    /** (Required) The ID of the Direct Connect virtual interface to accept. */
    virtual_interface_id: any;
    /** (Optional) The ID of the Direct Connect gateway to which to connect the virtual interface. */
    dx_gateway_id?:       any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
    /** (Optional) The ID of the [virtual private gateway](vpn_gateway.html) to which to connect the virtual interface. */
    vpn_gateway_id?:      any;
}