export interface SfnAlias {
    data: Datum[];
}

export interface Datum {
    sfn_alias: SfnAliasClass;
}

export interface SfnAliasClass {
    /** (Required) Name of the State Machine alias. */
    name:             any;
    /** (Required) ARN of the State Machine. */
    statemachine_arn: any;
}