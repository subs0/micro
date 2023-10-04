export interface GlueDataCatalogEncryptionSettings {
    data: Datum[];
}

export interface Datum {
    glue_data_catalog_encryption_settings: GlueDataCatalogEncryptionSettingsClass;
}

export interface GlueDataCatalogEncryptionSettingsClass {
    /** (Required) ID of the Data Catalog. This is typically the AWS account ID. */
    catalog_id: any;
}