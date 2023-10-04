export interface FmsPolicy {
    resource: Resource[];
}

export interface Resource {
    fms_policy: FmsPolicyClass;
}

export interface FmsPolicyClass {
    /** (Required, Forces new resource) The friendly name of the AWS Firewall Manager Policy. */
    name?:                               any;
    /** (Optional) If true, the request will also perform a clean-up process. Defaults to `true`. More information can be found here [AWS Firewall Manager delete policy](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_DeletePolicy.html) */
    delete_all_policy_resources?:        any;
    /** (Optional) If true, Firewall Manager will automatically remove protections from resources that leave the policy scope. Defaults to `false`. More information can be found here [AWS Firewall Manager policy contents](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html) */
    delete_unused_fm_managed_resources?: any;
    /** (Optional) The description of the AWS Network Firewall firewall policy. */
    description?:                        any;
    /** (Optional) A map of lists of accounts and OU's to exclude from the policy. */
    exclude_map?:                        any;
    /** (Required, Forces new resource) A boolean value, if true the tags that are specified in the `resource_tags` are not protected by this policy. If set to false and resource_tags are populated, resources that contain tags will be protected by this policy. */
    exclude_resource_tags?:              any;
    /** (Optional) A map of lists of accounts and OU's to include in the policy. */
    include_map?:                        any;
    /** (Required) A boolean value, indicates if the policy should automatically applied to resources that already exist in the account. */
    remediation_enabled:                 any;
    /** (Optional) A map of resource tags, that if present will filter protections on resources based on the exclude_resource_tags. */
    resource_tags?:                      any;
    /** (Optional) A resource type to protect. Conflicts with `resource_type_list`. See the [FMS API Reference](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html#fms-Type-Policy-ResourceType) for more information about supported values. */
    resource_type?:                      any;
    /** (Optional) A list of resource types to protect. Conflicts with `resource_type`. See the [FMS API Reference](https://docs.aws.amazon.com/fms/2018-01-01/APIReference/API_Policy.html#fms-Type-Policy-ResourceType) for more information about supported values. Lists with only one element are not supported, instead use `resource_type`. */
    resource_type_list?:                 any;
    /** (Required) The objects to include in Security Service Policy Data. Documented below. */
    security_service_policy_data:        any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                               any;
}