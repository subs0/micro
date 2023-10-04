export interface TransferTag {
    resource: Resource[];
}

export interface Resource {
    transfer_tag: TransferTagClass;
}

export interface TransferTagClass {
    /** (Required) Amazon Resource Name (ARN) of the Transfer Family resource to tag. */
    resource_arn: any;
    /** (Required) Tag name. */
    key:          any;
    /** (Required) Tag value. */
    value:        any;
}