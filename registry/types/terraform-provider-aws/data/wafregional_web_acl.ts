export interface WafregionalWebACL {
    data: Datum[];
}

export interface Datum {
    wafregional_web_acl: WafregionalWebACLClass;
}

export interface WafregionalWebACLClass {
    /** (Required) Name of the WAF Regional Web ACL. */
    name: any;
}