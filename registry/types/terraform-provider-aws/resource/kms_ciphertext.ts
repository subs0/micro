export interface KmsCiphertext {
    resource: Resource[];
}

export interface Resource {
    kms_ciphertext: KmsCiphertextClass;
}

export interface KmsCiphertextClass {
    /** (Required) Data to be encrypted. Note that this may show up in logs, and it will be stored in the state file. */
    plaintext: any;
    /** (Required) Globally unique key ID for the customer master key. */
    key_id:    any;
    /** (Optional) An optional mapping that makes up the encryption context. */
    context?:  any;
}