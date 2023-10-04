export interface SecurityhubFindingAggregator {
    resource: Resource[];
}

export interface Resource {
    securityhub_finding_aggregator: SecurityhubFindingAggregatorClass;
}

export interface SecurityhubFindingAggregatorClass {
    "This resource supports the following arguments:"?: any;
}