export interface SsmcontactsPlan {
    resource: Resource[];
}

export interface Resource {
    ssmcontacts_plan: SsmcontactsPlanClass;
}

export interface SsmcontactsPlanClass {
    /** (Required) The Amazon Resource Name (ARN) of the contact or escalation plan. */
    contact_id: any;
    /** (Required) List of stages. A contact has an engagement plan with stages that contact specified contact channels. An escalation plan uses stages that contact specified contacts. */
    stage:      any;
}