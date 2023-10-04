export interface NetworkmanagerVpcAttachment {
    resource: Resource[];
}

export interface Resource {
    networkmanager_vpc_attachment: NetworkmanagerVpcAttachmentClass;
}

export interface NetworkmanagerVpcAttachmentClass {
    /** (Required) The ID of a core network for the VPC attachment. */
    core_network_id: any;
    /** (Required) The subnet ARN of the VPC attachment. */
    subnet_arns:     any;
    /** (Required) The ARN of the VPC. */
    vpc_arn:         any;
    options?:        Options;
    /** (Optional) Key-value tags for the attachment. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
}

export interface Options {
    /** (Optional) Indicates whether appliance mode is supported. If enabled, traffic flow between a source and destination use the same Availability Zone for the VPC attachment for the lifetime of that flow. */
    appliance_mode_support: any;
    /** (Optional) Indicates whether IPv6 is supported. */
    ipv6_support:           any;
}