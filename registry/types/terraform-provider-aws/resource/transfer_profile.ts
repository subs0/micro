export interface TransferProfile {
    resource: Resource[];
}

export interface Resource {
    transfer_profile: TransferProfileClass;
}

export interface TransferProfileClass {
    /** (Required) The As2Id is the AS2 name as defined in the RFC 4130. For inbound ttransfers this is the AS2 From Header for the AS2 messages sent from the partner. For Outbound messages this is the AS2 To Header for the AS2 messages sent to the partner. his ID cannot include spaces. */
    as2_id:           any;
    /** (Optional) The list of certificate Ids from the imported certificate operation. */
    certificate_ids?: any;
    /** (Required) The profile type should be LOCAL or PARTNER. */
    profile_type:     any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:            any;
}