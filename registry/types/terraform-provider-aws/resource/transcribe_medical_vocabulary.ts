export interface TranscribeMedicalVocabulary {
    resource: Resource[];
}

export interface Resource {
    transcribe_medical_vocabulary: TranscribeMedicalVocabularyClass;
}

export interface TranscribeMedicalVocabularyClass {
    /** (Required) The language code you selected for your medical vocabulary. US English (en-US) is the only language supported with Amazon Transcribe Medical. */
    language_code:       any;
    /** (Required) The Amazon S3 location (URI) of the text file that contains your custom medical vocabulary. */
    vocabulary_file_uri: any;
    /** (Required) The name of the Medical Vocabulary. */
    vocabulary_name:     any;
    /** (Optional) A map of tags to assign to the MedicalVocabulary. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
}