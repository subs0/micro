export interface ImagebuilderDistributionConfiguration {
    data: Datum[];
}

export interface Datum {
    imagebuilder_distribution_configuration: ImagebuilderDistributionConfigurationClass;
}

export interface ImagebuilderDistributionConfigurationClass {
    /** (Required) ARN of the distribution configuration. */
    arn: any;
}