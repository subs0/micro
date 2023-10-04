export interface KendraThesaurus {
    resource: Resource[];
}

export interface Resource {
    kendra_thesaurus: KendraThesaurusClass;
}

export interface KendraThesaurusClass {
    /** (Required) The name for the thesaurus. */
    name:           any;
    /** (Required) The IAM (Identity and Access Management) role used to access the thesaurus file in S3. */
    role_arn:       any;
    /** (Required) The S3 path where your thesaurus file sits in S3. Detailed below. */
    source_s3_path: any;
    /** (Required) The name of the S3 bucket that contains the file. */
    bucket:         any;
    /** (Required) The name of the file. */
    key:            any;
    /** (Optional) The description for a thesaurus. */
    description?:   any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:          any;
}