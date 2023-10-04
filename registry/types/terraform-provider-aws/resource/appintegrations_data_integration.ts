export interface AppintegrationsDataIntegration {
    resource: Resource[];
}

export interface Resource {
    appintegrations_data_integration: AppintegrationsDataIntegrationClass;
}

export interface AppintegrationsDataIntegrationClass {
    /** (Optional) Specifies the description of the Data Integration. */
    description?:         any;
    /** (Required) Specifies the KMS key Amazon Resource Name (ARN) for the Data Integration. */
    kms_key:              any;
    /** (Required) Specifies the name of the Data Integration. */
    name:                 any;
    /** (Required) A block that defines the name of the data and how often it should be pulled from the source. The Schedule Config block is documented below. */
    schedule_config:      any;
    /** (Required) Specifies the URI of the data source. Create an [AppFlow Connector Profile](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/appflow_connector_profile) and reference the name of the profile in the URL. An example of this value for Salesforce is `Salesforce://AppFlow/example` where `example` is the name of the AppFlow Connector Profile. */
    source_uri:           any;
    /** (Optional) Tags to apply to the Data Integration. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
    /** (Required) The start date for objects to import in the first flow run as an Unix/epoch timestamp in milliseconds or in ISO-8601 format. This needs to be a time in the past, meaning that the data created or updated before this given date will not be downloaded. */
    first_execution_from: any;
    /** (Required) The name of the object to pull from the data source. Examples of objects in Salesforce include `Case`, `Account`, or `Lead`. */
    object:               any;
    /** (Required) How often the data should be pulled from data source. Examples include `rate(1 hour)`, `rate(3 hours)`, `rate(1 day)`. */
    schedule_expression:  any;
}