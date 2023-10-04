export interface WafWebACL {
    data: Datum[];
}

export interface Datum {
    waf_web_acl: WafWebACLClass;
}

export interface WafWebACLClass {
    /** (Required) Name of the WAF Web ACL. */
    name: any;
}