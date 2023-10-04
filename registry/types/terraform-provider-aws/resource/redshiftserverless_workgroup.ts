export interface RedshiftserverlessWorkgroup {
    resource: Resource[];
}

export interface Resource {
    redshiftserverless_workgroup: RedshiftserverlessWorkgroupClass;
}

export interface RedshiftserverlessWorkgroupClass {
    /** (Required) The name of the namespace. */
    namespace_name:        any;
    /** (Required) The name of the workgroup. */
    workgroup_name:        any;
    /** (Optional) The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs). */
    base_capacity?:        any;
    /** (Optional) An array of parameters to set for more control over a serverless database. See `Config Parameter` below. */
    config_parameter?:     any;
    /** (Optional) The value that specifies whether to turn on enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC instead of over the internet. */
    enhanced_vpc_routing?: any;
    /** (Optional) A value that specifies whether the workgroup can be accessed from a public network. */
    publicly_accessible?:  any;
    /** (Optional) An array of security group IDs to associate with the workgroup. */
    security_group_ids?:   any;
    /** (Optional) An array of VPC subnet IDs to associate with the workgroup. When set, must contain at least three subnets spanning three Availability Zones. A minimum number of IP addresses is required and scales with the Base Capacity. For more information, see the following [AWS document](https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-known-issues.html). */
    subnet_ids?:           any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                 any;
    /** (Required) The key of the parameter. The options are `auto_mv`, `datestyle`, `enable_case_sensitive_identifier`, `enable_user_activity_logging`, `query_group`, `search_path` and [query monitoring metrics](https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless) that let you define performance boundaries: `max_query_cpu_time`, `max_query_blocks_read`, `max_scan_row_count`, `max_query_execution_time`, `max_query_queue_time`, `max_query_cpu_usage_percent`, `max_query_temp_blocks_to_disk`, `max_join_row_count` and `max_nested_loop_join_row_count`. */
    parameter_key:         any;
    /** (Required) The value of the parameter to set. */
    parameter_value:       any;
}