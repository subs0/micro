export interface NetworkmanagerCoreNetwork {
    resource: Resource[];
}

export interface Resource {
    networkmanager_core_network: NetworkmanagerCoreNetworkClass;
}

export interface NetworkmanagerCoreNetworkClass {
    /** (Optional) Description of the Core Network. */
    description?:         any;
    /** (Optional, **Deprecated** use the `base_policy_regions` argument instead) The base policy created by setting the `create_base_policy` argument to `true` requires a region to be set in the `edge-locations`, `location` key. If `base_policy_region` is not specified, the region used in the base policy defaults to the region specified in the `provider` block. */
    base_policy_region?:  any;
    /** (Optional) A list of regions to add to the base policy. The base policy created by setting the `create_base_policy` argument to `true` requires one or more regions to be set in the `edge-locations`, `location` key. If `base_policy_regions` is not specified, the region used in the base policy defaults to the region specified in the `provider` block. */
    base_policy_regions?: any;
    /** (Optional) Specifies whether to create a base policy when a core network is created or updated. A base policy is created and set to `LIVE` to allow attachments to the core network (e.g. VPC Attachments) before applying a policy document provided using the [`aws_networkmanager_core_network_policy_attachment` resource](/docs/providers/aws/r/networkmanager_core_network_policy_attachment.html). This base policy is needed if your core network does not have any `LIVE` policies and your policy document has static routes pointing to VPC attachments and you want to attach your VPCs to the core network before applying the desired policy document. Valid values are `true` or `false`. An example of this Terraform snippet can be found above [for VPC Attachment in a single region](#with-vpc-attachment-single-region) and [for VPC Attachment multi-region](#with-vpc-attachment-multi-region). An example base policy is shown below. This base policy is overridden with the policy that you specify in the [`aws_networkmanager_core_network_policy_attachment` resource](/docs/providers/aws/r/networkmanager_core_network_policy_attachment.html). */
    create_base_policy?:  any;
    /** (Required) The ID of the global network that a core network will be a part of. */
    global_network_id:    any;
    /** (Optional) Key-value tags for the Core Network. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
}