export interface ServicecatalogProvisionedProduct {
    resource: Resource[];
}

export interface Resource {
    servicecatalog_provisioned_product: ServicecatalogProvisionedProductClass;
}

export interface ServicecatalogProvisionedProductClass {
    /** (Required) User-friendly name of the provisioned product. */
    name:                                any;
    /** (Optional) Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`. */
    accept_language?:                    any;
    /** (Optional) _Only applies to deleting._ If set to `true`, AWS Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources. The default value is `false`. */
    ignore_errors?:                      any;
    /** (Optional) Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events. */
    notification_arns?:                  any;
    /** (Optional) Path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use `aws_servicecatalog_launch_paths`. When required, you must provide `path_id` or `path_name`, but not both. */
    path_id?:                            any;
    /** (Optional) Name of the path. You must provide `path_id` or `path_name`, but not both. */
    path_name?:                          any;
    /** (Optional) Product identifier. For example, `prod-abcdzk7xy33qa`. You must provide `product_id` or `product_name`, but not both. */
    product_id?:                         any;
    /** (Optional) Name of the product. You must provide `product_id` or `product_name`, but not both. */
    product_name?:                       any;
    /** (Optional) Identifier of the provisioning artifact. For example, `pa-4abcdjnxjj6ne`. You must provide the `provisioning_artifact_id` or `provisioning_artifact_name`, but not both. */
    provisioning_artifact_id?:           any;
    /** (Optional) Name of the provisioning artifact. You must provide the `provisioning_artifact_id` or `provisioning_artifact_name`, but not both. */
    provisioning_artifact_name?:         any;
    provisioning_parameters?:            ProvisioningParameters;
    /** (Optional) _Only applies to deleting._ Whether to delete the Service Catalog provisioned product but leave the CloudFormation stack, stack set, or the underlying resources of the deleted provisioned product. The default value is `false`. */
    retain_physical_resources?:          any;
    stack_set_provisioning_preferences?: StackSetProvisioningPreferences;
    /** (Optional) Tags to apply to the provisioned product. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                               any;
}

export interface ProvisioningParameters {
    /** (Required) Parameter key. */
    key:                any;
    /** (Optional) Whether to ignore `value` and keep the previous parameter value. Ignored when initially provisioning a product. */
    use_previous_value: any;
    /** (Optional) Parameter value. */
    value:              any;
}

export interface StackSetProvisioningPreferences {
    /** (Optional) One or more AWS accounts that will have access to the provisioned product. The AWS accounts specified should be within the list of accounts in the STACKSET constraint. To get the list of accounts in the STACKSET constraint, use the `aws_servicecatalog_provisioning_parameters` data source. If no values are specified, the default value is all accounts from the STACKSET constraint. */
    accounts:                     any;
    /** (Optional) Number of accounts, per region, for which this operation can fail before AWS Service Catalog stops the operation in that region. If the operation is stopped in a region, AWS Service Catalog doesn't attempt the operation in any subsequent regions. You must specify either `failure_tolerance_count` or `failure_tolerance_percentage`, but not both. The default value is 0 if no value is specified. */
    failure_tolerance_count:      any;
    /** (Optional) Percentage of accounts, per region, for which this stack operation can fail before AWS Service Catalog stops the operation in that region. If the operation is stopped in a region, AWS Service Catalog doesn't attempt the operation in any subsequent regions. When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number. You must specify either `failure_tolerance_count` or `failure_tolerance_percentage`, but not both. */
    failure_tolerance_percentage: any;
    /** (Optional) Maximum number of accounts in which to perform this operation at one time. This is dependent on the value of `failure_tolerance_count`. `max_concurrency_count` is at most one more than the `failure_tolerance_count`. Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling. You must specify either `max_concurrency_count` or `max_concurrency_percentage`, but not both. */
    max_concurrency_count:        any;
    /** (Optional) Maximum percentage of accounts in which to perform this operation at one time. When calculating the number of accounts based on the specified percentage, AWS Service Catalog rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, AWS Service Catalog sets the number as 1 instead. Note that this setting lets you specify the maximum for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling. You must specify either `max_concurrency_count` or `max_concurrency_percentage`, but not both. */
    max_concurrency_percentage:   any;
    /** (Optional) One or more AWS Regions where the provisioned product will be available. The specified regions should be within the list of regions from the STACKSET constraint. To get the list of regions in the STACKSET constraint, use the `aws_servicecatalog_provisioning_parameters` data source. If no values are specified, the default value is all regions from the STACKSET constraint. */
    regions:                      any;
}