export interface SsmcontactsContact {
    data: Datum[];
}

export interface Datum {
    ssmcontacts_contact: SsmcontactsContactClass;
}

export interface SsmcontactsContactClass {
    /** (Required) The Amazon Resource Name (ARN) of the contact or escalation plan. */
    arn: any;
}