export interface AppintegrationsEventIntegration {
    data: Datum[];
}

export interface Datum {
    appintegrations_event_integration: AppintegrationsEventIntegrationClass;
}

export interface AppintegrationsEventIntegrationClass {
    /** (Required) The AppIntegrations Event Integration name. */
    name: any;
}