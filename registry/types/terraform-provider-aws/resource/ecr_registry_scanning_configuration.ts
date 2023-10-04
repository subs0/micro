export interface EcrRegistryScanningConfiguration {
    resource: Resource[];
}

export interface Resource {
    ecr_registry_scanning_configuration: EcrRegistryScanningConfigurationClass;
}

export interface EcrRegistryScanningConfigurationClass {
    "This resource supports the following arguments:"?: any;
    /** 

- `repository_filter` - (Required) One or more repository filter blocks, containing a `filter` (required string filtering repositories, see pattern regex [here](https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ScanningRepositoryFilter.html)) and a `filter_type` (required string, currently only `WILDCARD` is supported).
- `scan_frequency` - (Required) The frequency that scans are performed at for a private registry. Can be `SCAN_ON_PUSH`, `CONTINUOUS_SCAN`, or `MANUAL`. */
    rule?:                                              any;
}