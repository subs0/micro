export interface KmsPublicKey {
    data: Datum[];
}

export interface Datum {
    kms_public_key: KmsPublicKeyClass;
}

export interface KmsPublicKeyClass {
    /** (Required) Key identifier which can be one of the following format: */
    key_id:        any;
    /** (Optional) List of grant tokens */
    grant_tokens?: any;
}