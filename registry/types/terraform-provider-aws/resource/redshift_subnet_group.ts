export interface RedshiftSubnetGroup {
    resource: Resource[];
}

export interface Resource {
    redshift_subnet_group: RedshiftSubnetGroupClass;
}

export interface RedshiftSubnetGroupClass {
    /** (Required) The name of the Redshift Subnet group. */
    name:         any;
    /** (Optional) The description of the Redshift Subnet group. Defaults to "Managed by Terraform". */
    description?: any;
    /** (Required) An array of VPC subnet IDs. */
    subnet_ids:   any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}