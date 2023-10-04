export interface GlueConnection {
    resource: Resource[];
}

export interface Resource {
    glue_connection: GlueConnectionClass;
}

export interface GlueConnectionClass {
    physical_connection_requirements?: PhysicalConnectionRequirements;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                             any;
}

export interface PhysicalConnectionRequirements {
    /** (Optional) The availability zone of the connection. This field is redundant and implied by `subnet_id`, but is currently an api requirement. */
    availability_zone:      any;
    /** (Optional) The security group ID list used by the connection. */
    security_group_id_list: any;
    /** (Optional) The subnet ID used by the connection. */
    subnet_id:              any;
}