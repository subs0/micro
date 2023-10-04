export interface ElasticacheUserGroup {
    resource: Resource[];
}

export interface Resource {
    elasticache_user_group: ElasticacheUserGroupClass;
}

export interface ElasticacheUserGroupClass {
    /** (Required) The current supported value is `REDIS`. */
    engine:        any;
    /** (Required) The ID of the user group. */
    user_group_id: any;
    /** (Optional) The list of user IDs that belong to the user group. */
    user_ids?:     any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
}