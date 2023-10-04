export interface Route53DelegationSet {
    resource: Resource[];
}

export interface Resource {
    route53_delegation_set: Route53DelegationSetClass;
}

export interface Route53DelegationSetClass {
    /** (Optional) This is a reference name used in Caller Reference */
    reference_name?: any;
}