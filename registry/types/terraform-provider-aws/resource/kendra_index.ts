export interface KendraIndex {
    resource: Resource[];
}

export interface Resource {
    kendra_index: KendraIndexClass;
}

export interface KendraIndexClass {
    /** (Optional) A block that sets the number of additional document storage and query capacity units that should be used by the index. [Detailed below](#capacity_units). */
    capacity_units?:                          any;
    /** (Optional) The description of the Index. */
    description?:                             any;
    /** (Optional) One or more blocks that specify the configuration settings for any metadata applied to the documents in the index. Minimum number of 0 items. Maximum number of 500 items. If specified, you must define all elements, including those that are provided by default. These index fields are documented at [Amazon Kendra Index documentation](https://docs.aws.amazon.com/kendra/latest/dg/hiw-index.html). For an example resource that defines these default index fields, refer to the [default example above](#specifying-the-predefined-elements). For an example resource that appends additional index fields, refer to the [append example above](#appending-additional-elements). All arguments for each block must be specified. Note that blocks cannot be removed since index fields cannot be deleted. This argument is [detailed below](#document_metadata_configuration_updates). */
    document_metadata_configuration_updates?: any;
    /** (Optional) The Amazon Kendra edition to use for the index. Choose `DEVELOPER_EDITION` for indexes intended for development, testing, or proof of concept. Use `ENTERPRISE_EDITION` for your production databases. Once you set the edition for an index, it can't be changed. Defaults to `ENTERPRISE_EDITION` */
    edition?:                                 any;
    /** (Required) The name of the index field. Minimum length of 1. Maximum length of 30. */
    name:                                     any;
    /** (Required) An AWS Identity and Access Management (IAM) role that gives Amazon Kendra permissions to access your Amazon CloudWatch logs and metrics. This is also the role you use when you call the `BatchPutDocument` API to index documents from an Amazon S3 bucket. */
    role_arn:                                 any;
    /** (Optional) A block that specifies the identifier of the AWS KMS customer managed key (CMK) that's used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs. [Detailed below](#server_side_encryption_configuration). */
    server_side_encryption_configuration?:    any;
    /** (Optional) The user context policy. Valid values are `ATTRIBUTE_FILTER` or `USER_TOKEN`. For more information, refer to [UserContextPolicy](https://docs.aws.amazon.com/kendra/latest/APIReference/API_CreateIndex.html#kendra-CreateIndex-request-UserContextPolicy). Defaults to `ATTRIBUTE_FILTER`. */
    user_context_policy?:                     any;
    /** (Optional) A block that enables fetching access levels of groups and users from an AWS Single Sign-On identity source. To configure this, see [UserGroupResolutionConfiguration](https://docs.aws.amazon.com/kendra/latest/dg/API_UserGroupResolutionConfiguration.html). [Detailed below](#user_group_resolution_configuration). */
    user_group_resolution_configuration?:     any;
    /** (Optional) A block that specifies the user token configuration. [Detailed below](#user_token_configurations). */
    user_token_configurations?:               any;
    /** (Optional) Tags to apply to the Index. If configured with a provider */
    tags?:                                    any;
    /** (Required) The amount of extra query capacity for an index and GetQuerySuggestions capacity. For more information, refer to [QueryCapacityUnits](https://docs.aws.amazon.com/kendra/latest/dg/API_CapacityUnitsConfiguration.html#Kendra-Type-CapacityUnitsConfiguration-QueryCapacityUnits). */
    query_capacity_units:                     any;
    /** (Required) The amount of extra storage capacity for an index. A single capacity unit provides 30 GB of storage space or 100,000 documents, whichever is reached first. Minimum value of 0. */
    storage_capacity_units:                   any;
    /** (Required) A block that provides manual tuning parameters to determine how the field affects the search results. [Detailed below](#relevance) */
    relevance:                                any;
    /** (Required) A block that provides information about how the field is used during a search. Documented below. [Detailed below](#search) */
    search:                                   any;
    /** (Required) The data type of the index field. Valid values are `STRING_VALUE`, `STRING_LIST_VALUE`, `LONG_VALUE`, `DATE_VALUE`. */
    type:                                     any;
    /** (Required if type is of `DATE_VALUE`) Specifies the time period that the boost applies to. For more information, refer to [Duration](https://docs.aws.amazon.com/kendra/latest/dg/API_Relevance.html#Kendra-Type-Relevance-Duration). */
    duration?:                                any;
    /** (Required if type is of `DATE_VALUE`) Indicates that this field determines how "fresh" a document is. For more information, refer to [Freshness](https://docs.aws.amazon.com/kendra/latest/dg/API_Relevance.html#Kendra-Type-Relevance-Freshness). */
    freshness?:                               any;
    /** (Required for all types) The relative importance of the field in the search. Larger numbers provide more of a boost than smaller numbers. Minimum value of 1. Maximum value of 10. */
    importance?:                              any;
    /** (Required if type is of `DATE_VALUE`, or `LONG_VALUE`) Determines how values should be interpreted. For more information, refer to [RankOrder](https://docs.aws.amazon.com/kendra/latest/dg/API_Relevance.html#Kendra-Type-Relevance-RankOrder). */
    rank_order?:                              any;
    /** (Required if type is of `STRING_VALUE`) A list of values that should be given a different boost when they appear in the result list. For more information, refer to [ValueImportanceMap](https://docs.aws.amazon.com/kendra/latest/dg/API_Relevance.html#Kendra-Type-Relevance-ValueImportanceMap). */
    values_importance_map?:                   any;
    /** (Required) Determines whether the field is returned in the query response. The default is `true`. */
    displayable:                              any;
    /** (Required) Indicates that the field can be used to create search facets, a count of results for each value in the field. The default is `false`. */
    facetable:                                any;
    /** (Required) Determines whether the field is used in the search. If the Searchable field is true, you can use relevance tuning to manually tune how Amazon Kendra weights the field in the search. The default is `true` for `string` fields and `false` for `number` and `date` fields. */
    searchable:                               any;
    /** (Required) Determines whether the field can be used to sort the results of a query. If you specify sorting on a field that does not have Sortable set to true, Amazon Kendra returns an exception. The default is `false`. */
    sortable:                                 any;
    /** (Optional) The identifier of the AWS KMScustomer master key (CMK). Amazon Kendra doesn't support asymmetric CMKs. */
    kms_key_id?:                              any;
    /** (Required) The identity store provider (mode) you want to use to fetch access levels of groups and users. AWS Single Sign-On is currently the only available mode. Your users and groups must exist in an AWS SSO identity source in order to use this mode. Valid Values are `AWS_SSO` or `NONE`. */
    user_group_resolution_mode:               any;
    /** (Optional) A block that specifies the information about the JSON token type configuration. [Detailed below](#json_token_type_configuration). */
    json_token_type_configuration?:           any;
    /** (Optional) A block that specifies the information about the JWT token type configuration. [Detailed below](#jwt_token_type_configuration). */
    jwt_token_type_configuration?:            any;
    /** (Required) The group attribute field. Minimum length of 1. Maximum length of 2048. */
    group_attribute_field:                    any;
    /** (Required) The user name attribute field. Minimum length of 1. Maximum length of 2048. */
    user_name_attribute_field:                any;
    /** (Optional) The regular expression that identifies the claim. Minimum length of 1. Maximum length of 100. */
    claim_regex?:                             any;
    /** (Optional) The issuer of the token. Minimum length of 1. Maximum length of 65. */
    issuer?:                                  any;
    /** (Required) The location of the key. Valid values are `URL` or `SECRET_MANAGER` */
    key_location:                             any;
    /** (Optional) The Amazon Resource Name (ARN) of the secret. */
    secrets_manager_arn?:                     any;
    /** (Optional) The signing key URL. Valid pattern is `^(https?|ftp|file):\/\/([^\s]*)` */
    url?:                                     any;
}