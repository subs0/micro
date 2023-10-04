export interface DxConnectionConfirmation {
    resource: Resource[];
}

export interface Resource {
    dx_connection_confirmation: DxConnectionConfirmationClass;
}

export interface DxConnectionConfirmationClass {
    /** (Required) The ID of the hosted connection. */
    connection_id: any;
}