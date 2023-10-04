export interface ControltowerControls {
    data: Datum[];
}

export interface Datum {
    controltower_controls: ControltowerControlsClass;
}

export interface ControltowerControlsClass {
    /** (Required) The ARN of the organizational unit. */
    target_identifier: any;
}