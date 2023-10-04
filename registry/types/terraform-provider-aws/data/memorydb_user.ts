export interface MemorydbUser {
    data: Datum[];
}

export interface Datum {
    memorydb_user: MemorydbUserClass;
}

export interface MemorydbUserClass {
    /** (Required) Name of the user. */
    user_name: any;
}