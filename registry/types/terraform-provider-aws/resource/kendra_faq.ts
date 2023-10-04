export interface KendraFAQ {
    resource: Resource[];
}

export interface Resource {
    kendra_faq: KendraFAQClass;
}

export interface KendraFAQClass {
    /** (Required, Forces new resource) The name that should be associated with the FAQ. */
    name?:          any;
    /** (Required, Forces new resource) The Amazon Resource Name (ARN) of a role with permission to access the S3 bucket that contains the FAQs. For more information, see [IAM Roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html). */
    role_arn?:      any;
    /** (Required, Forces new resource) The S3 location of the FAQ input data. Detailed below. */
    s3_path?:       any;
    /** (Required, Forces new resource) The name of the S3 bucket that contains the file. */
    bucket?:        any;
    /** (Required, Forces new resource) The name of the file. */
    key?:           any;
    /** (Optional, Forces new resource) The description for a FAQ. */
    description?:   any;
    /** (Optional, Forces new resource) The file format used by the input files for the FAQ. Valid Values are `CSV`, `CSV_WITH_HEADER`, `JSON`. */
    file_format?:   any;
    /** (Optional, Forces new resource) The code for a language. This shows a supported language for the FAQ document. English is supported by default. For more information on supported languages, including their codes, see [Adding documents in languages other than English](https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html). */
    language_code?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:          any;
}