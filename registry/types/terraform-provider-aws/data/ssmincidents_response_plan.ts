export interface SsmincidentsResponsePlan {
    data: Datum[];
}

export interface Datum {
    ssmincidents_response_plan: SsmincidentsResponsePlanClass;
}

export interface SsmincidentsResponsePlanClass {
    /** (Required) The Amazon Resource Name (ARN) of the response plan. */
    arn: any;
}