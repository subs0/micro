export interface ChimesdkvoiceVoiceProfileDomain {
    resource: Resource[];
}

export interface Resource {
    chimesdkvoice_voice_profile_domain: ChimesdkvoiceVoiceProfileDomainClass;
}

export interface ChimesdkvoiceVoiceProfileDomainClass {
    /** (Required) Name of Voice Profile Domain. */
    name:                                 any;
    /** (Required) Configuration for server side encryption. */
    server_side_encryption_configuration: any;
    /** (Required) ARN for KMS Key. */
    kms_key_arn:                          any;
    /** (Optional) Description of Voice Profile Domain. */
    description?:                         any;
}