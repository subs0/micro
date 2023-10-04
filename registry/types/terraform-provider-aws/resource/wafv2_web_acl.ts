export interface Wafv2WebACL {
    resource: Resource[];
}

export interface Resource {
    wafv2_web_acl: { [key: any]: string };
}