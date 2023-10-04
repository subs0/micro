export interface ElasticBeanstalkConfigurationTemplate {
    resource: Resource[];
}

export interface Resource {
    elastic_beanstalk_configuration_template: ElasticBeanstalkConfigurationTemplateClass;
}

export interface ElasticBeanstalkConfigurationTemplateClass {
    /** (Required) A unique name for this Template. */
    name:         any;
    /** (Optional) Short description of the Template */
    description?: any;
}