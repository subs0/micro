export interface AppconfigHostedConfigurationVersion {
    resource: Resource[];
}

export interface Resource {
    appconfig_hosted_configuration_version: AppconfigHostedConfigurationVersionClass;
}

export interface AppconfigHostedConfigurationVersionClass {
    /** (Required, Forces new resource) Application ID. */
    application_id?:           any;
    /** (Required, Forces new resource) Configuration profile ID. */
    configuration_profile_id?: any;
    /** (Required, Forces new resource) Content of the configuration or the configuration data. */
    content?:                  any;
    /** (Required, Forces new resource) Standard MIME type describing the format of the configuration content. For more information, see [Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17). */
    content_type?:             any;
    /** (Optional, Forces new resource) Description of the configuration. */
    description?:              any;
}