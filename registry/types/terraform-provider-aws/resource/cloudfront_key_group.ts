export interface CloudfrontKeyGroup {
    resource: Resource[];
}

export interface Resource {
    cloudfront_key_group: CloudfrontKeyGroupClass;
}

export interface CloudfrontKeyGroupClass {
    /** (Optional) A comment to describe the key group.. */
    comment?: any;
    /** (Required) A list of the identifiers of the public keys in the key group. */
    items:    any;
    /** (Required) A name to identify the key group. */
    name:     any;
}