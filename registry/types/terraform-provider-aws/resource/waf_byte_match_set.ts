export interface WafByteMatchSet {
    resource: Resource[];
}

export interface Resource {
    waf_byte_match_set: WafByteMatchSetClass;
}

export interface WafByteMatchSetClass {
    /** (Required) The name or description of the Byte Match Set. */
    name:               any;
    /** Specifies the bytes (typically a string that corresponds */
    byte_match_tuples?: any;
}