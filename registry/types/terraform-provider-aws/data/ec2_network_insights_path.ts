export interface Ec2NetworkInsightsPath {
    data: Datum[];
}

export interface Datum {
    ec2_network_insights_path: Ec2NetworkInsightsPathClass;
}

export interface Ec2NetworkInsightsPathClass {
    /** (Optional) ID of the Network Insights Path to select. */
    network_insights_path_id?: any;
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?:                   any;
    /** (Required) Name of the filter field. Valid values can be found in the EC2 [`DescribeNetworkInsightsPaths`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInsightsPaths.html) API Reference. */
    name:                      any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:                    any;
}