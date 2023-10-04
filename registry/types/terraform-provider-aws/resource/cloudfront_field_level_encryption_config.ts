export interface CloudfrontFieldLevelEncryptionConfig {
    resource: Resource[];
}

export interface Resource {
    cloudfront_field_level_encryption_config: CloudfrontFieldLevelEncryptionConfigClass;
}

export interface CloudfrontFieldLevelEncryptionConfigClass {
    /** (Optional) An optional comment about the Field Level Encryption Config. */
    comment?:                                  any;
    /** (Required) [Content Type Profile Config](#content-type-profile-config) specifies when to forward content if a content type isn't recognized and profiles to use as by default in a request if a query argument doesn't specify a profile to use. */
    content_type_profile_config:               any;
    /** (Required) [Query Arg Profile Config](#query-arg-profile-config) that specifies when to forward content if a profile isn't found and the profile that can be provided as a query argument in a request. */
    query_arg_profile_config:                  any;
    /** (Required) specifies what to do when an unknown content type is provided for the profile. If true, content is forwarded without being encrypted when the content type is unknown. If false (the default), an error is returned when the content type is unknown. */
    forward_when_content_type_is_unknown:      any;
    /** (Required) Object that contains an attribute `items` that contains the list of configurations for a field-level encryption content type-profile. See [Content Type Profile](#content-type-profile). */
    content_type_profiles:                     any;
    /** (Required) he content type for a field-level encryption content type-profile mapping. Valid value is `application/x-www-form-urlencoded`. */
    content_type:                              any;
    /** (Required) The format for a field-level encryption content type-profile mapping. Valid value is `URLEncoded`. */
    format:                                    any;
    /** (Required) ID of profile to use for field-level encryption query argument-profile mapping */
    profile_id:                                any;
    /** (Required) Flag to set if you want a request to be forwarded to the origin even if the profile specified by the field-level encryption query argument, fle-profile, is unknown. */
    forward_when_query_arg_profile_is_unknown: any;
    /** (Optional) Object that contains an attribute `items` that contains the list ofrofiles specified for query argument-profile mapping for field-level encryption. see [Query Arg Profile](#query-arg-profile). */
    query_arg_profiles?:                       any;
    /** (Required) Query argument for field-level encryption query argument-profile mapping. */
    query_arg:                                 any;
}