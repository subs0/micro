export interface ConnectVocabulary {
    resource: Resource[];
}

export interface Resource {
    connect_vocabulary: ConnectVocabularyClass;
}

export interface ConnectVocabularyClass {
    /** (Required) The content of the custom vocabulary in plain-text format with a table of values. Each row in the table represents a word or a phrase, described with Phrase, IPA, SoundsLike, and DisplayAs fields. Separate the fields with TAB characters. For more information, see [Create a custom vocabulary using a table](https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table). Minimum length of `1`. Maximum length of `60000`. */
    content:       any;
    /** (Required) Specifies the identifier of the hosting Amazon Connect Instance. */
    instance_id:   any;
    /** (Required) The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see [What is Amazon Transcribe?](https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html). Valid Values are `ar-AE`, `de-CH`, `de-DE`, `en-AB`, `en-AU`, `en-GB`, `en-IE`, `en-IN`, `en-US`, `en-WL`, `es-ES`, `es-US`, `fr-CA`, `fr-FR`, `hi-IN`, `it-IT`, `ja-JP`, `ko-KR`, `pt-BR`, `pt-PT`, `zh-CN`. */
    language_code: any;
    /** (Required) A unique name of the custom vocabulary. Must not be more than 140 characters. */
    name:          any;
    /** (Optional) Tags to apply to the vocabulary. If configured with a provider */
    tags?:         any;
}