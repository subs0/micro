export interface KmsCustomKeyStore {
    data: Datum[];
}

export interface Datum {
    kms_custom_key_store: KmsCustomKeyStoreClass;
}

export interface KmsCustomKeyStoreClass {
    /** (Optional) The ID for the custom key store. */
    custom_key_store_id?:   any;
    /** (Optional) The user-specified friendly name for the custom key store. */
    custom_key_store_name?: any;
}