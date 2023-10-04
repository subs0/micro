export interface KendraExperience {
    resource: Resource[];
}

export interface Resource {
    kendra_experience: KendraExperienceClass;
}

export interface KendraExperienceClass {
    /** (Required, Forces new resource) The identifier of the index for your Amazon Kendra experience. */
    index_id?:                     any;
    /** (Required) A name for your Amazon Kendra experience. */
    name:                          any;
    /** (Required) The Amazon Resource Name (ARN) of a role with permission to access `Query API`, `QuerySuggestions API`, `SubmitFeedback API`, and `AWS SSO` that stores your user and group information. For more information, see [IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html). */
    role_arn:                      any;
    /** (Optional, Forces new resource if removed) A description for your Amazon Kendra experience. */
    description?:                  any;
    /** (Optional) Configuration information for your Amazon Kendra experience. Terraform will only perform drift detection of its value when present in a configuration. [Detailed below](#configuration). */
    configuration?:                any;
    /** (Optional, Required if `user_identity_configuration` not provided) The identifiers of your data sources and FAQs. Or, you can specify that you want to use documents indexed via the `BatchPutDocument API`. Terraform will only perform drift detection of its value when present in a configuration. [Detailed below](#content_source_configuration). */
    content_source_configuration?: any;
    /** (Optional, Required if `content_source_configuration` not provided) The AWS SSO field name that contains the identifiers of your users, such as their emails. [Detailed below](#user_identity_configuration). */
    user_identity_configuration?:  any;
    /** (Optional) The identifiers of the data sources you want to use for your Amazon Kendra experience. Maximum number of 100 items. */
    data_source_ids?:              any;
    /** (Optional) Whether to use documents you indexed directly using the `BatchPutDocument API`. Defaults to `false`. */
    direct_put_content?:           any;
    /** (Optional) The identifier of the FAQs that you want to use for your Amazon Kendra experience. Maximum number of 100 items. */
    faq_ids?:                      any;
    /** (Required) The AWS SSO field name that contains the identifiers of your users, such as their emails. */
    identity_attribute_name:       any;
}