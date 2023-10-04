export interface LexSlotType {
    data: Datum[];
}

export interface Datum {
    lex_slot_type: LexSlotTypeClass;
}

export interface LexSlotTypeClass {
    /** (Required) Name of the slot type. The name is case sensitive. */
    name:     any;
    /** (Optional) Version of the slot type. */
    version?: any;
}