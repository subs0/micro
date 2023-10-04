export interface OrganizationsOrganizationalUnit {
    resource: Resource[];
}

export interface Resource {
    organizations_organizational_unit: OrganizationsOrganizationalUnitClass;
}

export interface OrganizationsOrganizationalUnitClass {
    /** The name for the organizational unit */
    name?:      any;
    /** ID of the parent organizational unit, which may be the root */
    parent_id?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:      any;
}