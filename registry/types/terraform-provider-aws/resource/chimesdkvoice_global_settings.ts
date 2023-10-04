export interface ChimesdkvoiceGlobalSettings {
    resource: Resource[];
}

export interface Resource {
    chimesdkvoice_global_settings: ChimesdkvoiceGlobalSettingsClass;
}

export interface ChimesdkvoiceGlobalSettingsClass {
    /** (Required) The Voice Connector settings. See [voice_connector](#voice_connector). */
    voice_connector: any;
    /** (Optional) The S3 bucket that stores the Voice Connector's call detail records. */
    cdr_bucket?:     any;
}