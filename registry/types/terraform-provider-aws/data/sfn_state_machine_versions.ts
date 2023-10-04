export interface SfnStateMachineVersions {
    data: Datum[];
}

export interface Datum {
    sfn_state_machine_versions: SfnStateMachineVersionsClass;
}

export interface SfnStateMachineVersionsClass {
    /** (Required) ARN of the State Machine. */
    statemachine_arn: any;
}