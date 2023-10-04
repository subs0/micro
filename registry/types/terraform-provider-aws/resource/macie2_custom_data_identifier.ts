export interface Macie2CustomDataIdentifier {
    resource: Resource[];
}

export interface Resource {
    macie2_custom_data_identifier: Macie2CustomDataIdentifierClass;
}

export interface Macie2CustomDataIdentifierClass {
    /** (Optional) The regular expression (regex) that defines the pattern to match. The expression can contain as many as 512 characters. */
    regex?:                  any;
    /**  (Optional) An array that lists specific character sequences (keywords), one of which must be within proximity (`maximum_match_distance`) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3 - 90 characters. Keywords aren't case sensitive. */
    keywords?:               any;
    /** (Optional) An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4 - 90 characters. Ignore words are case sensitive. */
    ignore_words?:           any;
    /** (Optional) A custom name for the custom data identifier. The name can contain as many as 128 characters. If omitted, Terraform will assign a random, unique name. Conflicts with `name_prefix`. */
    name?:                   any;
    /**  (Optional) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:            any;
    /** (Optional) A custom description of the custom data identifier. The description can contain as many as 512 characters. */
    description?:            any;
    /** (Optional) The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1 - 300 characters. The default value is 50. */
    maximum_match_distance?: any;
    /** (Optional) A map of key-value pairs that specifies the tags to associate with the custom data identifier. */
    tags?:                   any;
}