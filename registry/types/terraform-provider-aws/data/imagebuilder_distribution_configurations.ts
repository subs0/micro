export interface ImagebuilderDistributionConfigurations {
    data: Datum[];
}

export interface Datum {
    imagebuilder_distribution_configurations: ImagebuilderDistributionConfigurationsClass;
}

export interface ImagebuilderDistributionConfigurationsClass {
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?: any;
}