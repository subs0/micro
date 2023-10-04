export interface LexIntent {
    data: Datum[];
}

export interface Datum {
    lex_intent: LexIntentClass;
}

export interface LexIntentClass {
    /** (Required) Name of the intent. The name is case sensitive. */
    name:     any;
    /** (Optional) Version of the intent. */
    version?: any;
}