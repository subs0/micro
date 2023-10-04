export interface ServicecatalogProvisioningArtifacts {
    data: Datum[];
}

export interface Datum {
    servicecatalog_provisioning_artifacts: ServicecatalogProvisioningArtifactsClass;
}

export interface ServicecatalogProvisioningArtifactsClass {
    /** (Required) Product identifier. */
    product_id:       any;
    /** (Optional) Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`. */
    accept_language?: any;
}