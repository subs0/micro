export interface ResourcegroupstaggingapiResources {
    data: Datum[];
}

export interface Datum {
    resourcegroupstaggingapi_resources: ResourcegroupstaggingapiResourcesClass;
}

export interface ResourcegroupstaggingapiResourcesClass {
    /** (Optional) Specifies whether to exclude resources that are compliant with the tag policy. You can use this parameter only if the `include_compliance_details` argument is also set to `true`. */
    exclude_compliant_resources?: any;
    /** (Optional) Specifies whether to include details regarding the compliance with the effective tag policy. */
    include_compliance_details?:  any;
    /** (Optional) Specifies a list of Tag Filters (keys and values) to restrict the output to only those resources that have the specified tag and, if included, the specified value. See [Tag Filter](#tag-filter) below. Conflicts with `resource_arn_list`. */
    tag_filter?:                  any;
    /** (Optional) Constraints on the resources that you want returned. The format of each resource type is `service:resourceType`. For example, specifying a resource type of `ec2` returns all Amazon EC2 resources (which includes EC2 instances). Specifying a resource type of `ec2:instance` returns only EC2 instances. */
    resource_type_filters?:       any;
    /** (Optional) Specifies a list of ARNs of resources for which you want to retrieve tag data. Conflicts with `filter`. */
    resource_arn_list?:           any;
    /** (Required) One part of a key-value pair that makes up a tag. */
    key:                          any;
    /** (Optional) Optional part of a key-value pair that make up a tag. */
    values?:                      any;
}