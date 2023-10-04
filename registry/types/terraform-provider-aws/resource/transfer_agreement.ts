export interface TransferAgreement {
    resource: Resource[];
}

export interface Resource {
    transfer_agreement: TransferAgreementClass;
}

export interface TransferAgreementClass {
    /** (Required) The IAM Role which provides read and write access to the parent directory of the file location mentioned in the StartFileTransfer request. */
    access_role:        any;
    /** (Required) The landing directory for the files transferred by using the AS2 protocol. */
    base_directory:     any;
    /** (Optional) The Optional description of the transdfer. */
    description?:       any;
    /** (Required) The unique identifier for the AS2 local profile. */
    local_profile_id:   any;
    /** (Required) The unique identifier for the AS2 partner profile. */
    partner_profile_id: any;
    /** (Required) The unique server identifier for the server instance. This is the specific server the agreement uses. */
    server_id:          any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
}