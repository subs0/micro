export interface VerifiedaccessInstance {
    resource: Resource[];
}

export interface Resource {
    verifiedaccess_instance: VerifiedaccessInstanceClass;
}

export interface VerifiedaccessInstanceClass {
    /** (Optional) A description for the AWS Verified Access Instance. */
    description?: any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}