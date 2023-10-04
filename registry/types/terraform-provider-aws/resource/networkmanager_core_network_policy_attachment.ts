export interface NetworkmanagerCoreNetworkPolicyAttachment {
    resource: Resource[];
}

export interface Resource {
    networkmanager_core_network_policy_attachment: NetworkmanagerCoreNetworkPolicyAttachmentClass;
}

export interface NetworkmanagerCoreNetworkPolicyAttachmentClass {
    /** (Required) The ID of the core network that a policy will be attached to and made `LIVE`. */
    core_network_id: any;
    /** (Required) Policy document for creating a core network. Note that updating this argument will result in the new policy document version being set as the `LATEST` and `LIVE` policy document. Refer to the [Core network policies documentation](https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-policy-change-sets.html) for more information. */
    policy_document: any;
}