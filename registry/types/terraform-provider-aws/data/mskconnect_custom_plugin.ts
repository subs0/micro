export interface MskconnectCustomPlugin {
    data: Datum[];
}

export interface Datum {
    mskconnect_custom_plugin: MskconnectCustomPluginClass;
}

export interface MskconnectCustomPluginClass {
    /** (Required) Name of the custom plugin. */
    name: any;
}