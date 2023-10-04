export interface KendraExperience {
    data: Datum[];
}

export interface Datum {
    kendra_experience: KendraExperienceClass;
}

export interface KendraExperienceClass {
    /** (Required) Identifier of the Experience. */
    experience_id: any;
    /** (Required) Identifier of the index that contains the Experience. */
    index_id:      any;
}