export interface EcrPullThroughCacheRule {
    data: Datum[];
}

export interface Datum {
    ecr_pull_through_cache_rule: EcrPullThroughCacheRuleClass;
}

export interface EcrPullThroughCacheRuleClass {
    "This data source supports the following arguments:"?: any;
}