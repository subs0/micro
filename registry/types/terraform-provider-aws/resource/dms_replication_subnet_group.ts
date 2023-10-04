export interface DmsReplicationSubnetGroup {
    resource: Resource[];
}

export interface Resource {
    dms_replication_subnet_group: DmsReplicationSubnetGroupClass;
}

export interface DmsReplicationSubnetGroupClass {
    /** (Required) Description for the subnet group. */
    replication_subnet_group_description: any;
    /** (Required) Name for the replication subnet group. This value is stored as a lowercase string. It must contain no more than 255 alphanumeric characters, periods, spaces, underscores, or hyphens and cannot be `default`. */
    replication_subnet_group_id:          any;
    /** (Required) List of at least 2 EC2 subnet IDs for the subnet group. The subnets must cover at least 2 availability zones. */
    subnet_ids:                           any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                any;
}