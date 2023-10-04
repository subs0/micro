export interface IamVirtualMfaDevice {
    resource: Resource[];
}

export interface Resource {
    iam_virtual_mfa_device: IamVirtualMfaDeviceClass;
}

export interface IamVirtualMfaDeviceClass {
    /** (Required) The name of the virtual MFA device. Use with path to uniquely identify a virtual MFA device. */
    virtual_mfa_device_name: any;
    /** (Optional) Map of resource tags for the virtual mfa device. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
}