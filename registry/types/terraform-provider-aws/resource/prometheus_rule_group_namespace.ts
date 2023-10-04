export interface PrometheusRuleGroupNamespace {
    resource: Resource[];
}

export interface Resource {
    prometheus_rule_group_namespace: PrometheusRuleGroupNamespaceClass;
}

export interface PrometheusRuleGroupNamespaceClass {
    /** (Required) The name of the rule group namespace */
    name:         any;
    /** (Required) ID of the prometheus workspace the rule group namespace should be linked to */
    workspace_id: any;
    /** (Required) the rule group namespace data that you want to be applied. See more [in AWS Docs](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-Ruler.html). */
    data:         any;
}