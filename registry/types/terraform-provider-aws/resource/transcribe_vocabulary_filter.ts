export interface TranscribeVocabularyFilter {
    resource: Resource[];
}

export interface Resource {
    transcribe_vocabulary_filter: TranscribeVocabularyFilterClass;
}

export interface TranscribeVocabularyFilterClass {
    /** (Required) The language code you selected for your vocabulary filter. Refer to the [supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) page for accepted codes. */
    language_code:               any;
    /** (Required) The name of the VocabularyFilter. */
    vocabulary_filter_name:      any;
    /** (Optional) The Amazon S3 location (URI) of the text file that contains your custom VocabularyFilter. Conflicts with `words` argument. */
    vocabulary_filter_file_uri?: any;
    /** (Optional) A map of tags to assign to the VocabularyFilter. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                       any;
    /** (Optional) - A list of terms to include in the vocabulary. Conflicts with `vocabulary_filter_file_uri` argument. */
    words?:                      any;
}