export interface KmsKey {
    data: Datum[];
}

export interface Datum {
    kms_key: KmsKeyClass;
}

export interface KmsKeyClass {
    /** (Required) Key identifier which can be one of the following format: */
    key_id:        any;
    /** (Optional) List of grant tokens */
    grant_tokens?: any;
}