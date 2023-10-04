export interface LexSlotType {
    resource: Resource[];
}

export interface Resource {
    lex_slot_type: LexSlotTypeClass;
}

export interface LexSlotTypeClass {
    enumeration_value:         EnumerationValue;
    /** (Required) The name of the slot type. The name is not case sensitive. Must be less than or equal to 100 characters in length. */
    name:                      any;
    /** (Optional) */
    create_version?:           any;
    /** (Optional) A description of the slot type. Must be less than or equal to 200 characters in length. */
    description?:              any;
    /** (Optional) Determines the slot resolution strategy that Amazon Lex */
    value_selection_strategy?: any;
}

export interface EnumerationValue {
    /** (Optional) Additional values related to the slot type value. Each item must be less than or equal to 140 characters in length. */
    synonyms?: any;
    /** (Required) The value of the slot type. Must be less than or equal to 140 characters in length. */
    value:     any;
}