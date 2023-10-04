export interface CloudformationStack {
    data: Datum[];
}

export interface Datum {
    cloudformation_stack: CloudformationStackClass;
}

export interface CloudformationStackClass {
    /** (Required) Name of the stack */
    name: any;
}