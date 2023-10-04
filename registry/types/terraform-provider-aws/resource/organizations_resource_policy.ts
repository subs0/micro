export interface OrganizationsResourcePolicy {
    resource: Resource[];
}

export interface Resource {
    organizations_resource_policy: OrganizationsResourcePolicyClass;
}

export interface OrganizationsResourcePolicyClass {
    /** (Required) Content for the resource policy. The text must be correctly formatted JSON that complies with the syntax for the resource policy's type. See the [_AWS Organizations User Guide_](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_delegate_examples.html) for examples. */
    content: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:   any;
}