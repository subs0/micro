export interface EcrPullThroughCacheRule {
    resource: Resource[];
}

export interface Resource {
    ecr_pull_through_cache_rule: EcrPullThroughCacheRuleClass;
}

export interface EcrPullThroughCacheRuleClass {
    /** (Required, Forces new resource) The repository name prefix to use when caching images from the source registry. */
    ecr_repository_prefix?: any;
    /** (Required, Forces new resource) The registry URL of the upstream public registry to use as the source. */
    upstream_registry_url?: any;
}