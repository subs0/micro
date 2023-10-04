export interface TranscribeVocabulary {
    resource: Resource[];
}

export interface Resource {
    transcribe_vocabulary: TranscribeVocabularyClass;
}

export interface TranscribeVocabularyClass {
    /** (Required) The language code you selected for your vocabulary. */
    language_code:       any;
    /** (Required) The Amazon S3 location (URI) of the text file that contains your custom vocabulary. */
    vocabulary_file_uri: any;
    /** (Required) The name of the Vocabulary. */
    vocabulary_name:     any;
    /** (Optional) - A list of terms to include in the vocabulary. Conflicts with `vocabulary_file_uri` */
    phrases?:            any;
    /** (Optional) A map of tags to assign to the Vocabulary. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
}