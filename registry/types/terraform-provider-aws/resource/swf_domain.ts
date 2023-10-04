export interface SWFDomain {
    resource: Resource[];
}

export interface Resource {
    swf_domain: SWFDomainClass;
}

export interface SWFDomainClass {
    /** (Optional, Forces new resource) The name of the domain. If omitted, Terraform will assign a random, unique name. */
    name?:                                        any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:                                 any;
    /** (Optional, Forces new resource) The domain description. */
    description?:                                 any;
    /** (Required, Forces new resource) Length of time that SWF will continue to retain information about the workflow execution after the workflow execution is complete, must be between 0 and 90 days. */
    workflow_execution_retention_period_in_days?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                        any;
}