export interface KendraQuerySuggestionsBlockList {
    resource: Resource[];
}

export interface Resource {
    kendra_query_suggestions_block_list: KendraQuerySuggestionsBlockListClass;
}

export interface KendraQuerySuggestionsBlockListClass {
    /** (Required, Forces New Resource) Identifier of the index for a block list. */
    index_id?:      any;
    /** (Required) Name for the block list. */
    name:           any;
    /** (Required) IAM (Identity and Access Management) role used to access the block list text file in S3. */
    role_arn:       any;
    /** (Required) S3 path where your block list text file is located. See details below. */
    source_s3_path: any;
    /** (Required) Name of the S3 bucket that contains the file. */
    bucket:         any;
    /** (Required) Name of the file. */
    key:            any;
    /** (Optional) Description for a block list. */
    description?:   any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block), tags with matching keys will overwrite those defined at the provider-level. */
    tags?:          any;
}