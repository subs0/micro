export interface SfnStateMachine {
    data: Datum[];
}

export interface Datum {
    sfn_state_machine: SfnStateMachineClass;
}

export interface SfnStateMachineClass {
    /** (Required) Friendly name of the state machine to match. */
    name: any;
}