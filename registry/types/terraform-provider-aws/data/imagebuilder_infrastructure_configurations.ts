export interface ImagebuilderInfrastructureConfigurations {
    data: Datum[];
}

export interface Datum {
    imagebuilder_infrastructure_configurations: ImagebuilderInfrastructureConfigurationsClass;
}

export interface ImagebuilderInfrastructureConfigurationsClass {
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?: any;
}