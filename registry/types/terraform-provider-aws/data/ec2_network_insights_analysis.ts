export interface Ec2NetworkInsightsAnalysis {
    data: Datum[];
}

export interface Datum {
    ec2_network_insights_analysis: Ec2NetworkInsightsAnalysisClass;
}

export interface Ec2NetworkInsightsAnalysisClass {
    /** (Optional) ID of the Network Insights Analysis to select. */
    network_insights_analysis_id?: any;
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?:                       any;
    /** (Required) Name of the filter field. Valid values can be found in the EC2 [`DescribeNetworkInsightsAnalyses`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInsightsAnalyses.html) API Reference. */
    name:                          any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:                        any;
}