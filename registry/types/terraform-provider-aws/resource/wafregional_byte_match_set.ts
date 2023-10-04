export interface WafregionalByteMatchSet {
    resource: Resource[];
}

export interface Resource {
    wafregional_byte_match_set: WafregionalByteMatchSetClass;
}

export interface WafregionalByteMatchSetClass {
    /** (Required) The name or description of the ByteMatchSet. */
    name:                  any;
    /** (Optional)Settings for the ByteMatchSet, such as the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests. ByteMatchTuple documented below. */
    byte_match_tuples?:    any;
    /** (Required) Settings for the ByteMatchTuple. FieldToMatch documented below. */
    field_to_match:        any;
    /** (Required) Within the portion of a web request that you want to search. */
    positional_constraint: any;
    target_any:         string;
    /** (Required) The formatting way for web request. */
    text_transformation:   any;
    /** (Optional) When the value of Type is HEADER, enter the name of the header that you want AWS WAF to search, for example, User-Agent or Referer. If the value of Type is any other value, omit Data. */
    data?:                 any;
    /** (Required) The part of the web request that you want AWS WAF to search for a specified string. */
    type:                  any;
}