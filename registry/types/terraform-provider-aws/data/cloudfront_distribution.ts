export interface CloudfrontDistribution {
    data: Datum[];
}

export interface Datum {
    cloudfront_distribution: CloudfrontDistributionClass;
}

export interface CloudfrontDistributionClass {
    /** Identifier for the distribution. For example: `EDFDVBD632BHDS5`. */
    id?: any;
}