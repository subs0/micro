export interface Route53DelegationSet {
    data: Datum[];
}

export interface Datum {
    route53_delegation_set: Route53DelegationSetClass;
}

export interface Route53DelegationSetClass {
    /** (Required) Delegation set ID. */
    id:                any;
    /** ARN of the Delegation Set. */
    arn?:              any;
    /** Caller Reference of the delegation set. */
    caller_reference?: any;
    /** List of DNS name servers for the delegation set. */
    name_servers?:     any;
}