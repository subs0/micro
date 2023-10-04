export interface CloudfrontFieldLevelEncryptionProfile {
    resource: Resource[];
}

export interface Resource {
    cloudfront_field_level_encryption_profile: CloudfrontFieldLevelEncryptionProfileClass;
}

export interface CloudfrontFieldLevelEncryptionProfileClass {
    /** (Required) The name of the Field Level Encryption Profile. */
    name:                any;
    /** (Optional) An optional comment about the Field Level Encryption Profile. */
    comment?:            any;
    /** (Required) The [encryption entities](#encryption-entities) config block for field-level encryption profiles that contains an attribute `items` which includes the encryption key and field pattern specifications. */
    encryption_entities: any;
    /** (Required) The public key associated with a set of field-level encryption patterns, to be used when encrypting the fields that match the patterns. */
    public_key_id:       any;
    /** (Required) The provider associated with the public key being used for encryption. */
    provider_id:         any;
    /** (Required) Object that contains an attribute `items` that contains the list of field patterns in a field-level encryption content type profile specify the fields that you want to be encrypted. */
    field_patterns:      any;
}