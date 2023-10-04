export interface Route53ResolverRuleAssociation {
    resource: Resource[];
}

export interface Resource {
    route53_resolver_rule_association: Route53ResolverRuleAssociationClass;
}

export interface Route53ResolverRuleAssociationClass {
    /** (Required) The ID of the resolver rule that you want to associate with the VPC. */
    resolver_rule_id: any;
    /** (Required) The ID of the VPC that you want to associate the resolver rule with. */
    vpc_id:           any;
    /** (Optional) A name for the association that you're creating between a resolver rule and a VPC. */
    name?:            any;
}