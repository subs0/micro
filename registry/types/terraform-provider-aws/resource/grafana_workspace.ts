export interface GrafanaWorkspace {
    resource: Resource[];
}

export interface Resource {
    grafana_workspace: GrafanaWorkspaceClass;
}

export interface GrafanaWorkspaceClass {
    /** (Required) The type of account access for the workspace. Valid values are `CURRENT_ACCOUNT` and `ORGANIZATION`. If `ORGANIZATION` is specified, then `organizational_units` must also be present. */
    account_access_type:        any;
    /** (Required) The authentication providers for the workspace. Valid values are `AWS_SSO`, `SAML`, or both. */
    authentication_providers:   any;
    /** (Required) The permission type of the workspace. If `SERVICE_MANAGED` is specified, the IAM roles and IAM policy attachments are generated automatically. If `CUSTOMER_MANAGED` is specified, the IAM roles and IAM policy attachments will not be created. */
    permission_type:            any;
    /** (Optional) The configuration string for the workspace that you create. For more information about the format and configuration options available, see [Working in your Grafana workspace](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html). */
    configuration?:             any;
    /** (Optional) The data sources for the workspace. Valid values are `AMAZON_OPENSEARCH_SERVICE`, `ATHENA`, `CLOUDWATCH`, `PROMETHEUS`, `REDSHIFT`, `SITEWISE`, `TIMESTREAM`, `XRAY` */
    data_sources?:              any;
    /** (Optional) The workspace description. */
    description?:               any;
    /** (Optional) Specifies the version of Grafana to support in the new workspace. Supported values are `8.4` and `9.4`. If not specified, defaults to `8.4`. */
    grafana_version?:           any;
    /** (Optional) The Grafana workspace name. */
    name?:                      any;
    /** (Optional) Configuration for network access to your workspace.See [Network Access Control](#network-access-control) below. */
    network_access_control?:    any;
    /** (Optional) The notification destinations. If a data source is specified here, Amazon Managed Grafana will create IAM roles and permissions needed to use these destinations. Must be set to `SNS`. */
    notification_destinations?: any;
    /** (Optional) The role name that the workspace uses to access resources through Amazon Organizations. */
    organization_role_name?:    any;
    /** (Optional) The Amazon Organizations organizational units that the workspace is authorized to use data sources from. */
    organizational_units?:      any;
    /** (Optional) The IAM role ARN that the workspace assumes. */
    role_arn?:                  any;
    /** (Optional) The AWS CloudFormation stack set name that provisions IAM roles to be used by the workspace. */
    stack_set_name?:            any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
    /** (Optional) The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to. See [VPC Configuration](#vpc-configuration) below. */
    vpc_configuration?:         any;
    /** (Required) - An array of prefix list IDs. */
    prefix_list_ids:            any;
    /** (Required) - An array of Amazon VPC endpoint IDs for the workspace. The only VPC endpoints that can be specified here are interface VPC endpoints for Grafana workspaces (using the com.amazonaws.[region].grafana-workspace service endpoint). Other VPC endpoints will be ignored. */
    vpce_ids:                   any;
    /** (Required) - The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect. */
    security_group_ids:         any;
    /** (Required) - The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect. */
    subnet_ids:                 any;
}