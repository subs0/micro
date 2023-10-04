export interface VpcSecurityGroupRule {
    data: Datum[];
}

export interface Datum {
    vpc_security_group_rule: VpcSecurityGroupRuleClass;
}

export interface VpcSecurityGroupRuleClass {
    /** (Optional) ID of the security group rule to select. */
    security_group_rule_id?: any;
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?:                 any;
    /** (Required) Name of the filter field. Valid values can be found in the EC2 [`DescribeSecurityGroupRules`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroupRules.html) API Reference. */
    name:                    any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:                  any;
}