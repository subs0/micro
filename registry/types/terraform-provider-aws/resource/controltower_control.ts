export interface ControltowerControl {
    resource: Resource[];
}

export interface Resource {
    controltower_control: ControltowerControlClass;
}

export interface ControltowerControlClass {
    /** (Required) The ARN of the control. Only Strongly recommended and Elective controls are permitted, with the exception of the Region deny guardrail. */
    control_identifier: any;
    /** (Required) The ARN of the organizational unit. */
    target_identifier:  any;
}