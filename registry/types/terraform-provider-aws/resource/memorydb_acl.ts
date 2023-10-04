export interface MemorydbACL {
    resource: Resource[];
}

export interface Resource {
    memorydb_acl: MemorydbACLClass;
}

export interface MemorydbACLClass {
    /** (Optional, Forces new resource) Name of the ACL. If omitted, Terraform will assign a random, unique name. Conflicts with `name_prefix`. */
    name?:        any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?: any;
    /** (Optional) Set of MemoryDB user names to be included in this ACL. */
    user_names?:  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}