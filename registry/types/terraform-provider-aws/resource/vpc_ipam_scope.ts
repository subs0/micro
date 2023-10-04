export interface VpcIPAMScope {
    resource: Resource[];
}

export interface Resource {
    vpc_ipam_scope: VpcIPAMScopeClass;
}

export interface VpcIPAMScopeClass {
    /** The ID of the IPAM for which you're creating this scope. */
    ipam_id?:     any;
    /** (Optional) A description for the scope you're creating. */
    description?: any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}