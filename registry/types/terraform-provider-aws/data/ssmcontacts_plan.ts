export interface SsmcontactsPlan {
    data: Datum[];
}

export interface Datum {
    ssmcontacts_plan: SsmcontactsPlanClass;
}

export interface SsmcontactsPlanClass {
    /** (Required) The Amazon Resource Name (ARN) of the contact or escalation plan. */
    contact_id: any;
}