export interface ElasticacheSubnetGroup {
    resource: Resource[];
}

export interface Resource {
    elasticache_subnet_group: ElasticacheSubnetGroupClass;
}

export interface ElasticacheSubnetGroupClass {
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?: any;
}