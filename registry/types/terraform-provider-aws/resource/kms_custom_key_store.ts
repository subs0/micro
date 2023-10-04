export interface KmsCustomKeyStore {
    resource: Resource[];
}

export interface Resource {
    kms_custom_key_store: KmsCustomKeyStoreClass;
}

export interface KmsCustomKeyStoreClass {
    /** (Required) Cluster ID of CloudHSM. */
    cloud_hsm_cluster_id:     any;
    /** (Required) Unique name for Custom Key Store. */
    custom_key_store_name:    any;
    /** (Required) Password for `kmsuser` on CloudHSM. */
    key_store_password:       any;
    /** (Required) Customer certificate used for signing on CloudHSM. */
    trust_anchor_certificate: any;
}