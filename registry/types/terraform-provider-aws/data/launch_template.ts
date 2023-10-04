export interface LaunchTemplate {
    data: Datum[];
}

export interface Datum {
    launch_template: LaunchTemplateClass;
}

export interface LaunchTemplateClass {
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?: any;
    /** (Optional) ID of the specific launch template to retrieve. */
    id?:     any;
    /** (Required) Name of the filter field. Valid values can be found in the [EC2 DescribeLaunchTemplates API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLaunchTemplates.html). */
    name:    any;
    /** (Optional) Map of tags, each pair of which must exactly match a pair on the desired Launch Template. */
    tags?:   any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:  any;
}