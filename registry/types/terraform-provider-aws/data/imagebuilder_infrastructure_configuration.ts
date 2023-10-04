export interface ImagebuilderInfrastructureConfiguration {
    data: Datum[];
}

export interface Datum {
    imagebuilder_infrastructure_configuration: ImagebuilderInfrastructureConfigurationClass;
}

export interface ImagebuilderInfrastructureConfigurationClass {
    /** (Required) ARN of the infrastructure configuration. */
    arn: any;
}