export interface ConnectVocabulary {
    data: Datum[];
}

export interface Datum {
    connect_vocabulary: ConnectVocabularyClass;
}

export interface ConnectVocabularyClass {
    /** (Required) Reference to the hosting Amazon Connect Instance */
    instance_id:    any;
    /** (Optional) Returns information on a specific Vocabulary by name */
    name?:          any;
    /** (Optional) Returns information on a specific Vocabulary by Vocabulary id */
    vocabulary_id?: any;
}